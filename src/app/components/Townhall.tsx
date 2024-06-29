"use client";
import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Mesh } from "three";
import React from "react";

function MeshComponent() {
  const fileUrl = '/townhall/scene.gltf';
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} position={[0, -1, 0]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Townhall() {
  return (
    <div className='flex justify-center items-center'>
      <Canvas style={{ height: '300px', width: '300px' }}>
        <OrbitControls
          minDistance={7}
          maxDistance={7}
          target={[0, 0, 0]}
        />
        <ambientLight intensity={1} />
        <pointLight position={[6, 6, 6]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={10} />
        <Environment preset="sunset" />
        <MeshComponent />
      </Canvas>
    </div>
  );
}
