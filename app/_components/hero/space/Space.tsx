'use client'

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Stars from "./Stars";

export default function Space() {
  return <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
    <Suspense>
      <Stars />
    </Suspense>
  </Canvas>;
}