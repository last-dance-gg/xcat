"use client"

import Hero from "./_components/hero/Hero"
import "./global.css"
import Crew from "./_components/crew/Crew"

import styles from "./page.module.css"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useState } from "react"
import { Stars } from "@react-three/drei"
import { Nav } from "./_components/nav/Nav"
import { Buy } from "./_components/buy/Buy"
import { Roadmap } from "./_components/roadmap/Roadmap"
import { Memes } from "./_components/memes/Memes"
import { Loader } from "../components/loader/Loader"

export default function HomePage() {
  const [globeReady, setGlobeReady] = useState(false)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    if (!globeReady) {
      return
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    const timeout = window.setTimeout(
      () => setShowLoader(false),
      reduceMotion ? 0 : 480,
    )

    return () => window.clearTimeout(timeout)
  }, [globeReady])

  useEffect(() => {
    if (!showLoader) {
      return
    }

    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previous
    }
  }, [showLoader])

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
        <Hero onGlobeReady={() => setGlobeReady(true)} />
        <Buy />
        <Crew />
        <Roadmap />
        <Memes />
      </div>
      {showLoader ? <Loader exiting={globeReady} /> : null}
      {/* <Loader exiting={false  } /> */}
    </div>
  )
}
