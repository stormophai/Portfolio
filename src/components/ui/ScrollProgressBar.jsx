import { useScroll, useSpring, motion } from 'framer-motion';

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 60, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[300] pointer-events-none origin-left"
      style={{
        scaleX,
        height: '2px',
        background: '#7c3aed',
      }}
    />
  );
};
