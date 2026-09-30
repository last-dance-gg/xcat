"use client"

import CurvedLoop from "../../../components/curved-loop/CurvedLoop"
import styles from "./crew.module.css"

export default function Crew() {
  return (
    <div className={styles.container}>
      <div className={styles.curvedLoop}>
        <CurvedLoop
          marqueeText="XCAT CREW ✦"
          speed={0.3}
          curveAmount={-300}
          direction="right"
          interactive
          className="custom-text-style"
        />
      </div>
      hey you
    </div>
  )
}
