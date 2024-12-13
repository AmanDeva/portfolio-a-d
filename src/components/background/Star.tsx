import { memo } from 'react';
import { StarProps } from './types';

function StarComponent({ size, top, left, animationDelay, duration }: StarProps) {
  return (
    <div
      className="absolute rounded-full bg-white animate-twinkle"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        '--duration': `${duration}s`,
        animationDelay: `${animationDelay}s`,
        boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`
      } as React.CSSProperties}
    />
  );
}

export const Star = memo(StarComponent);