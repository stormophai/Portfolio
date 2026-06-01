import { useCallback, useId } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const SparklesInner = ({
  id,
  className,
  size = 1,
  minSize = null,
  density = 800,
  speed = 1,
  minSpeed = null,
  opacity = 1,
  opacitySpeed = 3,
  minOpacity = null,
  color = "#a78bfa",
  background = "transparent",
  options = {},
}) => {
  const opts = {
    background: { color: { value: background } },
    fullScreen: { enable: false, zIndex: 1 },
    fpsLimit: 60,
    particles: {
      color: { value: color },
      move: {
        enable: true,
        direction: "none",
        speed: { min: minSpeed ?? speed / 10, max: speed },
        straight: false,
      },
      number: { value: density },
      opacity: {
        value: { min: minOpacity ?? opacity / 10, max: opacity },
        animation: { enable: true, sync: false, speed: opacitySpeed },
      },
      size: { value: { min: minSize ?? size / 2.5, max: size } },
    },
    detectRetina: true,
    ...options,
  };

  return <Particles id={id} options={opts} className={className} />;
};

export function Sparkles(props) {
  const id = useId().replace(/:/g, "s");

  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={init}>
      <SparklesInner id={id} {...props} />
    </ParticlesProvider>
  );
}
