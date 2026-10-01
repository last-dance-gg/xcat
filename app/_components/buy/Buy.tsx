import { motion } from "motion/react"
import GlassSurface from "../../../components/glass-container/GlassSurface"
import styles from "./buy.module.css"
import { HowToBuy } from "./HowToBuy"
import { Title } from "@mantine/core"
import { SparkleText } from "../../../components/sparkle-text/SparkleText"

export function Buy() {
  return (
    <div className={styles.container} id="buy">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.3,
          ease: [0.7, 0, 0.2, 1],
        }}
      >
        <Title
          order={2}
          className={styles.heading}
          size={48}
          ta="center"
          mb={24}
        >
          How to buy <SparkleText word="$XCAT" />
        </Title>
      </motion.div>

      <GlassSurface
        width="100%"
        height="100%"
        displace={2}
        distortionScale={-180}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        brightness={30}
        opacity={0.99}
        mixBlendMode="overlay"
      >
        <HowToBuy />
      </GlassSurface>
    </div>
  )
}
