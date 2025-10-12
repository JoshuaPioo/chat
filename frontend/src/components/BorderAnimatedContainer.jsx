import React from 'react';
import { motion } from 'framer-motion';

const BorderAnimatedContainer = ({ children }) => {
  return (
    <div className="relative w-full h-full rounded-2xl p-[2px] bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 animate-border-spin">
      {/* Inner blurred glass effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/40 via-blue-600/40 to-purple-600/40 blur-xl opacity-30 animate-pulse"></div>

      {/* Animated border layer */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 6,
          ease: 'linear',
          repeat: Infinity,
        }}
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-60"
        style={{
          backgroundSize: '200% 200%',
          maskImage:
            'linear-gradient(white, white) content-box, linear-gradient(white, white)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      ></motion.div>

      {/* Main content box */}
      <div className="relative w-full h-full bg-slate-900/80 backdrop-blur-md rounded-2xl overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default BorderAnimatedContainer;
