"use client"

import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Globe } from "globe-threejs"

type TextureWithImage = {
  image?: { complete?: boolean } | null
}

function globeTexturesReady(globe: Globe) {
  const uniforms = globe.earth.material.uniforms
  const ready = (texture?: TextureWithImage) =>
    Boolean(texture?.image) && texture?.image?.complete !== false

  return (
    ready(uniforms.dayTexture?.value as TextureWithImage | undefined) &&
    ready(uniforms.nightTexture?.value as TextureWithImage | undefined)
  )
}

export function Earth({ onGlobeReady }: { onGlobeReady: () => void }) {
  const { scene } = useThree()

  const globeRef = useRef<Globe | null>(null)
  const onGlobeReadyRef = useRef(onGlobeReady)
  onGlobeReadyRef.current = onGlobeReady

  useEffect(() => {
    const globe = new Globe({
      textureResolution: "4k",
      autoUpdate: false,
      earthRadius: 2.6,
    })

    globeRef.current = globe
    globe.earth.position.y = -1.5

    globe.addToScene(scene)

    let settled = false
    let frame = 0
    let timeout = 0

    const finish = () => {
      if (settled) {
        return
      }
      settled = true
      window.clearTimeout(timeout)
      cancelAnimationFrame(frame)
      onGlobeReadyRef.current()
    }

    const watch = () => {
      if (globeTexturesReady(globe)) {
        finish()
        return
      }
      frame = requestAnimationFrame(watch)
    }

    frame = requestAnimationFrame(watch)
    timeout = window.setTimeout(finish, 10_000)

    return () => {
      settled = true
      window.clearTimeout(timeout)
      cancelAnimationFrame(frame)
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
