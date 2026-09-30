"use client"

import Hero from "./_components/hero/Hero"
import "./global.css"
import Crew from "./_components/crew/Crew"

import styles from "./page.module.css"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Stars } from "@react-three/drei"
import { Nav } from "./_components/nav/Nav"

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
          <Suspense>
            <color attach="background" args={["#02030b"]} />
            <Stars
              radius={20}
              depth={50}
              count={50000}
              factor={2}
              saturation={1}
              fade
              speed={0.2}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className={styles.content}>
        <Nav />
        <Hero />
        <Crew />
      </div>
    </div>
  )
}
