import { Suspense, lazy, useCallback } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

const SplineLoader = () => (
  <div className="w-full h-full flex items-center justify-center">
    <svg className="animate-spin h-6 w-6 text-violet-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z" />
    </svg>
  </div>
);

// Ground object names commonly used in Spline scenes
const GROUND_NAMES = ['Ground', 'Floor', 'Plane', 'ground', 'floor', 'plane', 'Environment', 'Grid'];

export function InteractiveRobotSpline({ scene, className = '' }) {
  const handleLoad = useCallback((app) => {
    // Make the WebGL canvas background fully transparent
    try {
      app.renderer.setClearColor(0x000000, 0);
      app.renderer.setPixelRatio(window.devicePixelRatio);
    } catch (_) {}

    // Hide common ground/floor objects by name
    GROUND_NAMES.forEach((name) => {
      try {
        const obj = app.findObjectByName(name);
        if (obj) obj.visible = false;
      } catch (_) {}
    });
  }, []);

  return (
    <Suspense fallback={<SplineLoader />}>
      {/* CSS mask fades the bottom (ground area) into transparent */}
      <div
        className={`${className} relative`}
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 85%)',
          maskImage: 'linear-gradient(to bottom, black 55%, transparent 85%)',
          background: 'transparent',
        }}
      >
        <Spline
          scene={scene}
          onLoad={handleLoad}
          className="w-full h-full [&_canvas]:!bg-transparent"
        />
      </div>
    </Suspense>
  );
}
