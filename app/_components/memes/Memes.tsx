"use client"

import React from "react"
import { SimpleGrid, Text, Title, Stack, Image } from "@mantine/core"
import { motion } from "framer-motion"
import { Lightbox, LightboxSlideData } from "@mantine/lightbox"
import styles from "./memes.module.css"
import Image1 from "../../_assets/memes/design-reference.webp"
import Image2 from "../../_assets/memes/xcat-art.webp"
import Image3 from "../../_assets/memes/xcat-banner.webp"
import Image4 from "../../_assets/memes/xcat-logo.webp"

const images = [Image4.src, Image1.src, Image2.src, Image3.src]

const slides: LightboxSlideData[] = images.map((src) => ({ src }))

export function Memes() {
  const [opened, setOpened] = React.useState(false)
  const [index, setIndex] = React.useState(0)

  return (
    <section className={styles.container}>
      <Stack gap={48} align="center">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.3,
            ease: [0.7, 0, 0.2, 1],
          }}
        >
          <Stack gap={16} align="center">
            <Title order={2} size={64}>
              Memes from the Pack.
            </Title>
            <Text size="sm" c="dimmed" ta="center">
              Origin art plus pack submissions. New URLs sit in moderation until
              approved.
            </Text>
          </Stack>
        </motion.div>

        <Lightbox
          opened={opened}
          onClose={() => setOpened(false)}
          slides={slides}
          currentIndex={index}
          onIndexChange={setIndex}
        />

        <div className={styles.memes}>
          <SimpleGrid cols={3}>
            {images.map((src, i) => (
              <Image
                key={src}
                src={src}
                fit="cover"
                height={300}
                radius="md"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setIndex(i)
                  setOpened(true)
                }}
              />
            ))}
          </SimpleGrid>
        </div>
      </Stack>
    </section>
  )
}
