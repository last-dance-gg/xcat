"use client"

import { Box, Stack, Text, Title } from "@mantine/core"
import {
  IconArrowsExchange,
  IconCopy,
  IconHourglass,
  IconWallet,
} from "@tabler/icons-react"
import styles from "./how-to-buy.module.css"

const steps = [
  {
    area: styles.one,
    index: "01",
    title: "Get a wallet",
    body: "Phantom, Solflare, or Backpack. Fund it with SOL. That is gas and the bid.",
    icon: IconWallet,
  },
  {
    area: styles.two,
    index: "02",
    title: "Copy the CA",
    body: "Use the button on this page. Check the first and last characters. Degens who skip this step deserve what happens next.",
    icon: IconCopy,
  },
  {
    area: styles.three,
    index: "03",
    title: "Swap",
    body: "Jupiter for SOL → $XCAT, or trade the $XCAT / $SPCX pair on StonkFun.",
    icon: IconArrowsExchange,
  },
  {
    area: styles.four,
    index: "04",
    title: "Hold",
    body: "Keep $XCAT in your own wallet. Fees convert to $SPCX and pay holders pro-rata. Nothing to claim.",
    icon: IconHourglass,
  },
] as const

export function HowToBuy() {
  return (
    <Box
      component="section"
      className={styles.grid}
      aria-labelledby="how-to-buy-heading"
    >
      {steps.map(({ area, index, title, body }) => (
        <Stack
          gap={6}
          key={index}
          component="article"
          className={`${styles.step} ${area}`}
        >
          <Title order={3} size={36}>
            <span className={styles.index}>{index}&nbsp;</span>
            {title}
          </Title>
          <Text size="sm">{body}</Text>
        </Stack>
      ))}
    </Box>
  )
}
