"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Stars from "./Stars"
import styles from "./space.module.css"

export default function Space() {
  return (
    <div className={styles.space}>
      <div className={styles.stars}>
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
          <Suspense>
            <color attach="background" args={["#02030b"]} />
            <Stars />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}
