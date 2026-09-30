"use client"

import { Headline } from "./components/Headline"
import Space from "./components/Space"
import styles from "./hero.module.css"

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.space}>
        <Space />
      </div>
      <div className={styles.headline}>
        <Headline />
      </div>
    </div>
  )
}
