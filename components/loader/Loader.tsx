"use client"

import LatticeLoader from "../lattice-loader/LatticeLoader"
import styles from "./loader.module.css"

export function Loader({ exiting }: { exiting: boolean }) {
  return (
    <div
      className={`${styles.loader} ${exiting ? styles.exiting : ""}`}
      role="status"
      aria-live="polite"
      aria-busy={!exiting}
    >
      <LatticeLoader
        status={exiting ? "done" : "working"}
        label="Loading..."
        doneLabel="Loaded!"
        errorLabel="Failed to Load :("
        pattern="orbit"
        grid={3}
        shape="round"
        doneColor="#22c55e"
        errorColor="#ef4444"
        cellSize={6}
        gap={2}
        fontSize={14}
        step={90}
        idleOpacity={0.15}
        glow={false}
        glowColor=""
        showTimer={false}
        color="#f5f5f5"
      />
    </div>
  )
}
