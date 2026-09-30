"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Stars from "./Stars"
import { Earth } from "./Earth"
import CosmicGlow from "./CosmicGlow"
import styles from "./space.module.css"
import { EarthGlow } from "./EarthGlow"
import { EarthGlowSurface } from "./EarthGlowSurface"
import { Headline } from "./Headline"

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

      <div className={styles.cosmicGlow}>
        <CosmicGlow />
      </div>

      <div className={styles.earthGlow}>
        <EarthGlow />
      </div>

      <div className={styles.earth}>
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
          <Suspense>
            <Earth />
          </Suspense>
        </Canvas>
      </div>

      <div className={styles.earthGlowSurface}>
        <EarthGlowSurface />
      </div>

      <div className={styles.headline}>
        <Headline />
      </div>
    </div>
  )
}
