import { Badge, Group, Text, Title } from "@mantine/core"
import styles from "./headline.module.css"
import XCAT from "../../../_assets/images/XCAT-AST-HEADSHOT.webp"
import RotatingText from "../../../../components/rotating-text/RotatingText"
import { LayoutGroup } from "motion/react"
import { motion } from "framer-motion"

export function Headline() {
  return (
    <div className={styles.container}>
      <Group justify="center" gap={8}>
        <Badge variant="light" color="indigo.6">
          STONKFUN
        </Badge>
        <Badge variant="light">1% Transfer Rate</Badge>
      </Group>
      <hgroup className={styles.headline}>
        <Group gap={16} align="center">
          <Title order={1} size={64} lh={0.8} fw={500}>
            HOLD THE
          </Title>
          <Title order={1} size={64} lh={0.8} fw={500}>
            <span className={styles.highlight}>
              <img src={XCAT.src} alt="XCAT" className={styles.xcat} />
              <span>&nbsp;&nbsp;&nbsp;&nbsp;CAT</span>
            </span>
          </Title>
        </Group>
        {/* <Group gap={8} align="center">
          <Title order={1} size={64} lh={0.8} fw={500}>
            GET
          </Title> */}
        <LayoutGroup>
          <motion.p className={styles.rotatingTextContainer} layout>
            <motion.span
              layout
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            >
              <Title order={1} size={64} lh={0.8} fw={500}>
                GET
              </Title>
            </motion.span>
            <RotatingText
              texts={["$SPCX", "Rich", "Schwifty"]}
              mainClassName={styles.rotatingText}
              splitLevelClassName={styles.rotatingTextSplit}
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
              splitBy="characters"
              auto
              loop
            />
          </motion.p>
        </LayoutGroup>
      </hgroup>

      <Text className={styles.description} size="xl">
        XCAT launched on StonkFun. Hold it and $SPCX lands in your wallet from
        trading fees.
        <br />
        No staking. No claiming. Same cat. Bigger vision.
      </Text>
    </div>
  )
}
