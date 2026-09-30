"use client"

import { Stars as DreiStars } from "@react-three/drei"

export default function Stars() {
  return (
    <DreiStars
      radius={20}
      depth={50}
      count={50000}
      factor={2}
      saturation={1}
      fade
      speed={0.2}
    />
  )
}
