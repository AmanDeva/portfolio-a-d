import { Canvas } from '@react-three/fiber';
import { Stars } from './three/Stars';
import { memo } from 'react';

function Background3DComponent() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 2]} // Optimize performance by setting appropriate device pixel ratio
      >
        <Stars />
      </Canvas>
    </div>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(Background3DComponent);