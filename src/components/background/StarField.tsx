import { memo, useMemo } from 'react';
import { Star } from './Star';
import { generateStars } from './utils';
import { STAR_CONFIG } from './constants';

function StarFieldComponent() {
  const starLayers = useMemo(() => 
    Array.from({ length: STAR_CONFIG.LAYERS }, () => 
      generateStars(STAR_CONFIG.COUNT)
    ), []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {starLayers.map((stars, layerIndex) => (
        <div 
          key={layerIndex}
          className="absolute inset-0"
          style={{
            transform: `translateZ(${layerIndex * -20}px) scale(${1 + layerIndex * 0.2})`,
            opacity: 1 - (layerIndex * 0.15)
          }}
        >
          {stars.map((star, starIndex) => (
            <Star 
              key={`${layerIndex}-${starIndex}`}
              {...star}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export const StarField = memo(StarFieldComponent);