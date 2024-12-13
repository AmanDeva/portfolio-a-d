import { Canvas } from '@react-three/fiber';
import { FloatingBox } from './three/FloatingBox';

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingBox position={[-2, 1, 0]} />
        <FloatingBox position={[2, -1, 0]} />
      </Canvas>
    </div>
  );
}