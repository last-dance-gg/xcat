import { Stack, Text, Title, Timeline } from "@mantine/core"
import {
  IconChartCandle,
  IconRadar,
  IconSparkles,
  IconUsersGroup,
} from "@tabler/icons-react"

export function Roadmap() {
  return (
    <section>
      <Stack gap={48} align="center">
        <Title order={2} size={64}>
          Roadmap
        </Title>

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
