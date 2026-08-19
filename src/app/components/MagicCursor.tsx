import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Sparkle {
  id: string;
  x: number;
  y: number;
}

export function MagicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if device is touch-enabled
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouchDevice();

    // Don't run cursor effects on touch devices
    if (isTouchDevice) return;

    let lastTime = 0;
    const throttleDelay = 30; // Create sparkles every 30ms

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Throttle sparkle creation
      if (currentTime - lastTime > throttleDelay) {
        const uniqueId = `${currentTime}-${Math.random()}`;
        const newSparkle: Sparkle = {
          id: uniqueId,
          x: e.clientX,
          y: e.clientY,
        };

        setSparkles((prev) => [...prev, newSparkle]);

        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== uniqueId));
        }, 1000);

        lastTime = currentTime;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isTouchDevice]);

  // Don't render cursor on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      {/* Custom Wand Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        {/* Wand */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'drop-shadow(0 0 4px rgba(255, 215, 0, 0.6))' }}
        >
          {/* Wand stick - diagonal line */}
          <line
            x1="4"
            y1="20"
            x2="18"
            y2="6"
            stroke="url(#wandGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Wand tip - star */}
          <circle cx="18" cy="6" r="2" fill="#FFD700" opacity="0.9" />
          <circle cx="18" cy="6" r="1.5" fill="#FFFFFF" />
          
          <defs>
            <linearGradient id="wandGradient" x1="4" y1="20" x2="18" y2="6">
              <stop offset="0%" stopColor="#8B4513" />
              <stop offset="100%" stopColor="#D2691E" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Sparkle Trail */}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            initial={{
              x: sparkle.x,
              y: sparkle.y,
              scale: 0,
              opacity: 1,
            }}
            animate={{
              x: sparkle.x + (Math.random() - 0.5) * 20,
              y: sparkle.y + (Math.random() - 0.5) * 20,
              scale: [0, 1, 0],
              opacity: [1, 0.8, 0],
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
          >
            <Sparkle />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}

function Sparkle() {
  const size = Math.random() * 4 + 2;
  const colors = ['#FFD700', '#FFA500', '#FFFF00', '#FFE4B5', '#FFFFFF'];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <svg
      width={size * 2}
      height={size * 2}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'blur(0.5px)' }}
    >
      {/* Four-pointed star */}
      <path
        d="M5 0 L5.5 4.5 L10 5 L5.5 5.5 L5 10 L4.5 5.5 L0 5 L4.5 4.5 Z"
        fill={color}
        opacity="0.9"
      />
      {/* Center glow */}
      <circle cx="5" cy="5" r="1.5" fill="#FFFFFF" opacity="0.8" />
    </svg>
  );
}