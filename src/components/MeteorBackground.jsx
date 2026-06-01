import { useMemo } from "react";
import { motion } from "framer-motion";

export const MeteorBackground = ({
  count = 20,
  speed = 4, // seconds for full traversal
  color = "#00E5FF",
  maxLength = 150,
  minLength = 50,
  thickness = 2,
  angle = 45, // falling diagonal
}) => {
  // Generate random meteors on initial mount
  const meteors = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      // Random starting positions (slightly outside viewport so they enter smoothly)
      left: Math.random() * 150 - 25 + "%",
      top: Math.random() * -50 - 10 + "%",
      // Random delay so they don't all fall at once
      delay: Math.random() * 8,
      // Randomize speed slightly for depth
      duration: speed + Math.random() * 4,
      // Randomize length
      length: minLength + Math.random() * (maxLength - minLength),
    }));
  }, [count, speed, maxLength, minLength]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Meteor CSS Animation Definitions */}
      <style>{`
        @keyframes meteor-fall {
          0% {
            transform: translateY(-20vh) translateX(20vh) rotate(${angle}deg);
            opacity: 1;
          }
          100% {
            transform: translateY(120vh) translateX(-120vh) rotate(${angle}deg);
            opacity: 0;
          }
        }
        .meteor-streak {
          position: absolute;
          border-radius: 999px;
          background: linear-gradient(to right, ${color} 0%, transparent 100%);
          box-shadow: 0 0 10px ${color}80, 0 0 2px ${color};
          animation: meteor-fall linear infinite;
        }
      `}</style>

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor-streak"
          style={{
            left: meteor.left,
            top: meteor.top,
            width: `${meteor.length}px`,
            height: `${thickness}px`,
            animationDuration: `${meteor.duration}s`,
            animationDelay: `${meteor.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
