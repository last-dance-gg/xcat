import { useMemo } from "react"
import styles from "./sparkle-text.module.css"

type SparkleTextProps = {
  word: string
}

type RandomSparkleValue = {
  size: number
  y: number
  x: number
  delay: number
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function SparkleText({ word }: SparkleTextProps) {
  const randomSparkleValues = useMemo<RandomSparkleValue[]>(() => {
    return Array.from({ length: 5 }, () => ({
      size: getRandomInt(14, 24),
      y: getRandomInt(-5, 5),
      x: getRandomInt(-20, 20),
      delay: getRandomInt(200, 1000),
    }))
  }, [])

  return (
    <span className={styles.sparkle}>
      <span className={styles.sparkleText}>{word}</span>

      {randomSparkleValues.map((offset, index) => (
        <span
          key={index}
          className={styles[`sparkle${index + 1}`]}
          style={
            {
              "--size": `${offset.size}px`,
              "--y": `${offset.y}px`,
              "--x": `${offset.x}px`,
              "--delay": `${offset.delay}ms`,
            } as React.CSSProperties
          }
        />
      ))}
    </span>
  )
}
