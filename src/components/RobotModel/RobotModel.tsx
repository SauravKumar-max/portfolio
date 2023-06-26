"use client";

import React, { Suspense } from "react";
import { Robot } from "./Robot";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Loader } from "./Loader";

export function RobotModel() {
  return (
    <div className="h-[33rem] -mt-4">
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 2, 5] }}>
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 5]} intensity={1} />
        <Suspense fallback={<Loader />}>
          <Robot />
        </Suspense>
      </Canvas>
    </div>
  );
}
