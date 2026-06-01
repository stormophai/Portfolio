import { motion, useScroll, useTransform } from 'framer-motion';
import { InteractiveRobotSpline } from '../ui/interactive-3d-robot';
import { CursorDrivenParticleTypography } from '../ui/cursor-driven-particles-typography';

const ROBOT_SCENE = 'https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode';
const EASE = [0.22, 1, 0.36, 1];

export const Hero = () => {
  const { scrollY } = useScroll();
  const contentY       = useTransform(scrollY, [0, 600], [0, -90]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const bgScale        = useTransform(scrollY, [0, 800], [1, 1.08]);
  const robotY         = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      id="hero"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ scale: bgScale, willChange: 'transform' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)' }}
        />
      </motion.div>

      {/* 3D Robot — parallax slower than content */}
      <motion.div
        className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-auto"
        style={{ y: robotY, willChange: 'transform' }}
      >
        <InteractiveRobotSpline
          scene={ROBOT_SCENE}
          className="w-full h-full absolute inset-0"
        />
      </motion.div>

      {/* Left gradient mask */}
      <div
        className="absolute inset-y-0 left-0 w-[55%] pointer-events-none hidden lg:block"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.85) 40%, transparent 100%)' }}
      />

      {/* Content — parallax upward on scroll */}
      <motion.div
        className="relative z-10 max-w-[1200px] mx-auto px-8 pt-36 pb-32 min-h-screen flex items-center"
        style={{ y: contentY, opacity: contentOpacity, willChange: 'transform, opacity' }}
      >
        <div className="w-full lg:w-[50%]">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <CursorDrivenParticleTypography
              text="Rethink"
              fontSize={100}
              particleDensity={5}
              dispersionStrength={20}
              returnSpeed={0.07}
              color="#a78bfa"
              textAlign="left"
              className="h-[110px]"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="text-5xl lg:text-[3.8rem] font-sans font-bold leading-[1.08] tracking-tight text-white mb-8"
          >
            Build digital products that{' '}
            <span className="text-violet-400">scale</span> with{' '}
            <span className="text-violet-400">precision</span>
          </motion.h1>



        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
    </section>
  );
};
