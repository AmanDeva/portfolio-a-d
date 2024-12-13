import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

interface FloatingBoxProps {
  position: [number, number, number];
  scale?: number;
}

export function FloatingBox({ position, scale = 0.2 }: FloatingBoxProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const springs = useSpring({
    scale: [scale, scale, scale],
    config: { mass: 2, tension: 170, friction: 26 }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <animated.mesh ref={meshRef} position={position} scale={springs.scale}>
        <boxGeometry />
        <meshStandardMaterial
          color="#fff"
          metalness={0.8}
          roughness={0.2}
          emissive="#404040"
        />
      </animated.mesh>
    </Float>
  );
}