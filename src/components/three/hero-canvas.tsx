'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial, OrbitControls, RoundedBox } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

const WebStudioModel = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.35, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * 0.15, 0.05);
  });

  return (
    <group ref={group} position={[0, -0.5, 0]}>
      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.8}>
        <RoundedBox args={[3.8, 2.2, 0.16]} radius={0.08} smoothness={4} position={[0, 1.15, 0]} castShadow>
          <meshStandardMaterial color="#0f1b34" metalness={0.4} roughness={0.2} />
        </RoundedBox>

        <RoundedBox args={[3.4, 1.8, 0.08]} radius={0.05} smoothness={4} position={[0, 1.15, 0.1]}>
          <meshStandardMaterial color="#091123" emissive="#1f9eff" emissiveIntensity={0.28} />
        </RoundedBox>

        <RoundedBox args={[1.1, 0.2, 0.5]} radius={0.04} position={[0, -0.2, 0]} castShadow>
          <meshStandardMaterial color="#1c2a49" metalness={0.55} roughness={0.2} />
        </RoundedBox>

        <RoundedBox args={[4.8, 0.12, 2.6]} radius={0.06} position={[0, -0.45, -0.1]} receiveShadow>
          <meshStandardMaterial color="#121c34" metalness={0.2} roughness={0.4} />
        </RoundedBox>
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={1.4} position={[-2.8, 1.9, -1]}>
        <mesh castShadow>
          <icosahedronGeometry args={[0.4, 1]} />
          <MeshDistortMaterial color="#3ad7ff" speed={2} distort={0.35} roughness={0.1} metalness={0.7} />
        </mesh>
      </Float>

      <Float speed={1.6} rotationIntensity={1} floatIntensity={1.2} position={[2.4, 1.2, -0.4]}>
        <mesh castShadow>
          <torusKnotGeometry args={[0.24, 0.08, 140, 18]} />
          <meshStandardMaterial color="#9a6bff" emissive="#6a2cff" emissiveIntensity={0.4} />
        </mesh>
      </Float>
    </group>
  );
};

const SceneLoader = () => (
  <div className="absolute inset-0 grid place-items-center bg-slate-950/50 text-sm text-slate-200">
    Chargement de la scène 3D immersive…
  </div>
);

export const HeroCanvas = () => {
  return (
    <div className="absolute inset-0">
      <Suspense fallback={<SceneLoader />}>
        <Canvas camera={{ position: [0, 1.2, 6], fov: 42 }} shadows dpr={[1, 1.8]}>
          <color attach="background" args={['#05070f']} />
          <fog attach="fog" args={['#05070f', 8, 16]} />
          <ambientLight intensity={0.55} />
          <directionalLight position={[4, 7, 3]} intensity={1.4} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
          <pointLight position={[-4, 2, 3]} intensity={1.2} color="#3ad7ff" />
          <pointLight position={[3, 2.5, -2]} intensity={1.1} color="#9a6bff" />
          <WebStudioModel />
          <Environment preset="city" />
          <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.9} minPolarAngle={Math.PI / 2.8} />
        </Canvas>
      </Suspense>
    </div>
  );
};
