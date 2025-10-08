import React from 'react'

function BorderAnimatedContainer({ children }) {
  return (
    <div className="relative inline-block rounded-2xl p-[2px]">
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg,_#06b6d4,_#7c3aed,_#ef4444,_#06b6d4)] animate-spin-slow"></div>

      {/* Inner content */}
      <div className="relative z-10 bg-gray-900 rounded-2xl p-6">
        {children}
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default BorderAnimatedContainer
