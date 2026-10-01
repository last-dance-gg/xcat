"use client"

import { Headline } from "./components/Headline"
import Space from "./components/Space"
import styles from "./hero.module.css"
import { Address } from "./components/Address"

export default function Hero({ onGlobeReady }: { onGlobeReady: () => void }) {
  return (
    <div className={styles.container}>
      <div className={styles.space}>
        <Space onGlobeReady={onGlobeReady} />
      </div>
      <div className={styles.headline}>
        <Headline />
      </div>
      <div className={styles.address}>
        <Address />
      </div>
    </div>
  )
}
