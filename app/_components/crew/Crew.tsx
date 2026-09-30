"use client"

import CurvedLoop from "../../../components/curved-loop/CurvedLoop"
import Space from "./components/Space"
import styles from "./crew.module.css"

export default function Crew() {
  return (
    <div className={styles.container}>
      <div className={styles.space}>
        <Space />
      </div>
      <div className={styles.curvedLoop}>
        <CurvedLoop
          marqueeText="XCAT CREW ✦"
          speed={2}
          curveAmount={400}
          direction="right"
          interactive
          className="custom-text-style"
        />
      </div>
    </div>
  )
}
