'use client';

import { useEffect, useState } from 'react';

export function GlowOrbs() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay loading of decorative elements to improve LCP
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div 
        className="glow-orb glow-orb-blue glow-orb-animated w-[500px] h-[500px] -top-32 -left-32"
        style={{ willChange: 'transform' }} // Optimize for animations
      />
      <div 
        className="glow-orb glow-orb-purple glow-orb-animated w-[400px] h-[400px] top-1/3 -right-32" 
        style={{ animationDelay: '2s', willChange: 'transform' }} 
      />
      <div 
        className="glow-orb glow-orb-cyan glow-orb-animated w-[350px] h-[350px] bottom-0 left-1/4" 
        style={{ animationDelay: '4s', willChange: 'transform' }} 
      />
    </div>
  );
}