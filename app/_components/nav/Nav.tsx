import { ActionIcon, Button, Group } from "@mantine/core"
import Link from "next/link"
import styles from "./nav.module.css"
import { IconBrandTelegram, IconBrandX, IconUser } from "@tabler/icons-react"

export function Nav() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Group justify="space-between">
          <Group justify="center" gap={12}>
            <div className={styles.logo}>XCAT LOGO</div>
            <Button
              component={Link}
              href="/#crew"
              variant="subtle"
              color="gray.0"
              size="compact-md"
            >
              Crew
            </Button>
            <Button
              component={Link}
              href="/#about"
              variant="subtle"
              color="gray.0"
              size="compact-md"
            >
              Rewards
            </Button>
            <Button
              component={Link}
              href="/#about"
              variant="subtle"
              color="gray.0"
              size="compact-md"
            >
              Terminal
            </Button>
            <Button
              component={Link}
              href="/#about"
              variant="subtle"
              color="gray.0"
              size="compact-md"
            >
              Story
            </Button>
          </Group>

          <Group gap={8}>
            <ActionIcon variant="subtle" color="gray.0">
              <IconBrandTelegram size={16} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray.0">
              <IconBrandX size={16} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray.0">
              <IconUser size={16} />
            </ActionIcon>
            <Button
              component={Link}
              href="/#buy"
              variant="light"
              color="cyan"
              size="compact-sm"
            >
              Buy $XCAT
            </Button>
          </Group>
        </Group>
      </nav>
    </div>
  )
}
