import { Stack, Text, Title, Timeline } from "@mantine/core"
import {
  IconChartCandle,
  IconRadar,
  IconSparkles,
  IconUsersGroup,
} from "@tabler/icons-react"
import { motion } from "motion/react"

export function Roadmap() {
  return (
    <section>
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
          <Stack gap={16}>
            <Title order={2} size={64}>
              Roadmap, but Make it Cat.
            </Title>
            <Text size="sm" c="dimmed" ta="center">
              Directional. Progress is shown, not promised.
            </Text>
          </Stack>
        </motion.div>

        <Timeline active={0} bulletSize={36} lineWidth={4}>
          <Timeline.Item
            bullet={<IconRadar size={20} />}
            title="Claim the signal"
            opposite={
              <Text size="sm" c="blue">
                Life 01 / Now
              </Text>
            }
          >
            <Text size="sm">
              Site, contract, live tape, StonkFun $SPCX rewards, pack links.
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconUsersGroup size={20} />}
            title="Grow the pack"
            opposite={
              <Text size="sm" c="dimmed">
                Life 02 / Next
              </Text>
            }
          >
            <Text size="sm">
              Meme wall, holder cards, social campaigns, better activity.{" "}
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Keep the tape honest"
            bullet={<IconChartCandle size={20} />}
            lineVariant="dashed"
            opposite={
              <Text size="sm" c="dimmed">
                Life 03 / Build
              </Text>
            }
          >
            <Text size="sm">
              Richer holder cards, faster indexer, more pack tools when they are
              real.
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Keep evolving"
            bullet={<IconSparkles size={20} />}
            opposite={
              <Text size="sm" c="dimmed">
                Life 04 / Beyond
              </Text>
            }
          >
            <Text size="sm">
              New art, new utilities, chapters the people who show up write.
            </Text>
          </Timeline.Item>
        </Timeline>
      </Stack>
    </section>
  )
}
