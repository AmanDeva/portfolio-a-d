import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const STAR_COUNT = 5000;
const SPHERE_RADIUS = 1.5;
const ROTATION_SPEED_X = 0.1;
const ROTATION_SPEED_Y = 0.15;

export function Stars() {
  const ref = useRef<any>();
  
  // Generate star positions only once using useMemo
  const positions = useMemo(() => {
    const positions = new Float32Array(STAR_COUNT * 3);
    random.inSphere(positions, { radius: SPHERE_RADIUS });
    
    // Ensure no NaN values in positions
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) {
        positions[i] = 0;
      }
    }
    
    return positions;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * ROTATION_SPEED_X;
      ref.current.rotation.y -= delta * ROTATION_SPEED_Y;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points 
        ref={ref} 
        positions={positions} 
        stride={3} 
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}