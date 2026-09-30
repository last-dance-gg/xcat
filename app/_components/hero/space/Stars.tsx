'use client'

import { Stars as DreiStars } from "@react-three/drei";

export default function Stars() {
  return <DreiStars
    radius={80}
    depth={50}
    count={5000}
    factor={2}
    saturation={0}
    fade
    speed={0.2}
  />;
}