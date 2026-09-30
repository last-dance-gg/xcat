"use client"

import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Globe } from "globe-threejs"

export function Earth() {
  const { scene } = useThree()

  const globeRef = useRef<Globe | null>(null)

  useEffect(() => {
    const globe = new Globe({
      textureResolution: "4k",
      autoUpdate: false,
      earthRadius: 2.6,
    })

    globeRef.current = globe
    globe.earth.position.y = -1.5

    globe.addToScene(scene)

    return () => {
      globe.dispose()
      globeRef.current = null
    }
  }, [scene])

  useFrame((_, delta) => {
    if (globeRef.current?.earth) {
      globeRef.current.earth.rotation.y += delta * 0.03
    }
  })

  return null
}
