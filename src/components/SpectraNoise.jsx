import { useEffect, useRef, useCallback } from 'react';

const VERTEX_SHADER = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision mediump float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_hueShift;
  uniform float u_noiseIntensity;
  uniform float u_scanlineDensity;
  uniform float u_scanlineIntensity;
  uniform float u_warpAmount;
  uniform float u_speed;

  // Simplex-style noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // HSV to RGB conversion
  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float t = u_time * u_speed;
    
    // Warp distortion
    float warpX = snoise(vec2(uv.y * 3.0 + t * 0.3, t * 0.1)) * u_warpAmount;
    float warpY = snoise(vec2(uv.x * 3.0 + t * 0.2, t * 0.15)) * u_warpAmount * 0.5;
    vec2 warpedUV = uv + vec2(warpX, warpY);
    
    // Multi-layered noise
    float n1 = snoise(warpedUV * 2.0 + t * 0.15) * 0.5 + 0.5;
    float n2 = snoise(warpedUV * 5.0 - t * 0.1) * 0.5 + 0.5;
    float n3 = snoise(warpedUV * 12.0 + t * 0.25) * 0.5 + 0.5;
    float combinedNoise = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;
    
    // Color generation with hue shift
    float hue = combinedNoise * 0.15 + u_hueShift + t * 0.02;
    float sat = 0.6 + n2 * 0.3;
    float val = combinedNoise * 0.15 * u_noiseIntensity;
    
    vec3 color = hsv2rgb(vec3(hue, sat, val));
    
    // Add subtle color streaks
    float streak = snoise(vec2(warpedUV.x * 1.5 + t * 0.05, warpedUV.y * 20.0)) * 0.5 + 0.5;
    streak = pow(streak, 4.0);
    color += hsv2rgb(vec3(hue + 0.3, 0.8, streak * 0.08 * u_noiseIntensity));
    
    // Scanlines
    float scanline = sin(gl_FragCoord.y * u_scanlineDensity) * 0.5 + 0.5;
    scanline = pow(scanline, 1.5);
    color *= 1.0 - (scanline * u_scanlineIntensity);
    
    // Horizontal glitch bands (occasional)
    float glitchBand = step(0.98, snoise(vec2(t * 2.0, floor(uv.y * 20.0))));
    color += glitchBand * 0.03 * vec3(0.4, 0.7, 1.0);
    
    // Film grain
    float grain = (snoise(gl_FragCoord.xy * 0.5 + t * 100.0) * 0.5 + 0.5) * 0.04 * u_noiseIntensity;
    color += grain;
    
    // Vignette
    float vignette = 1.0 - smoothstep(0.4, 1.4, length(uv - 0.5) * 1.8);
    color *= vignette;
    
    // Keep overall dark
    color *= 0.85;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

const DEFAULT_CONFIG = {
  hueShift: 0.72,        // Violet-teal range
  noiseIntensity: 1.0,
  scanlineDensity: 3.0,
  scanlineIntensity: 0.08,
  warpAmount: 0.03,
  speed: 0.4,
  resolutionScale: 0.5,  // Half res for performance
};

export const SpectraNoise = ({ config = {}, className = '' }) => {
  const canvasRef = useRef(null);
  const glRef = useRef(null);
  const programRef = useRef(null);
  const uniformsRef = useRef({});
  const rafRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  const cfg = { ...DEFAULT_CONFIG, ...config };

  const initGL = useCallback((canvas) => {
    const gl = canvas.getContext('webgl', { 
      alpha: false, 
      antialias: false,
      powerPreference: 'low-power' 
    });
    if (!gl) return null;

    // Compile shaders
    const vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, VERTEX_SHADER);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, FRAGMENT_SHADER);
    gl.compileShader(fs);

    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
      console.error('Fragment shader error:', gl.getShaderInfoLog(fs));
      return null;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Full-screen quad
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1,
    ]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // Cache uniform locations
    const uniforms = {
      time: gl.getUniformLocation(program, 'u_time'),
      resolution: gl.getUniformLocation(program, 'u_resolution'),
      hueShift: gl.getUniformLocation(program, 'u_hueShift'),
      noiseIntensity: gl.getUniformLocation(program, 'u_noiseIntensity'),
      scanlineDensity: gl.getUniformLocation(program, 'u_scanlineDensity'),
      scanlineIntensity: gl.getUniformLocation(program, 'u_scanlineIntensity'),
      warpAmount: gl.getUniformLocation(program, 'u_warpAmount'),
      speed: gl.getUniformLocation(program, 'u_speed'),
    };

    glRef.current = gl;
    programRef.current = program;
    uniformsRef.current = uniforms;

    return gl;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = initGL(canvas);
    if (!gl) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const scale = cfg.resolutionScale;
      canvas.width = canvas.clientWidth * dpr * scale;
      canvas.height = canvas.clientHeight * dpr * scale;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const t = (Date.now() - startTimeRef.current) / 1000;
      const u = uniformsRef.current;

      gl.uniform1f(u.time, t);
      gl.uniform2f(u.resolution, canvas.width, canvas.height);
      gl.uniform1f(u.hueShift, cfg.hueShift);
      gl.uniform1f(u.noiseIntensity, cfg.noiseIntensity);
      gl.uniform1f(u.scanlineDensity, cfg.scanlineDensity);
      gl.uniform1f(u.scanlineIntensity, cfg.scanlineIntensity);
      gl.uniform1f(u.warpAmount, cfg.warpAmount);
      gl.uniform1f(u.speed, cfg.speed);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [initGL, cfg.hueShift, cfg.noiseIntensity, cfg.scanlineDensity, cfg.scanlineIntensity, cfg.warpAmount, cfg.speed, cfg.resolutionScale]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ imageRendering: 'auto' }}
    />
  );
};
