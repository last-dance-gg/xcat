import { Button, CopyButton, Group, Stack, TextInput } from "@mantine/core"
import styles from "./address.module.css"
import Link from "next/link"

export function Address() {
  return (
    <Stack>
      <Group
        align="center"
        gap={4}
        justify="space-between"
        wrap="nowrap"
        className={styles.container}
      >
        <TextInput
          variant="unstyled"
          value="2UxzjvPXQ6CeJhAhk95yHicD3FavprqkukXz1DJAKsRs"
          w="34ch"
          readOnly
        />
        <CopyButton value="2UxzjvPXQ6CeJhAhk95yHicD3FavprqkukXz1DJAKsRs">
          {({ copied, copy }) => (
            <Button
              variant="light"
              color={copied ? "teal" : "blue"}
              onClick={copy}
              radius="xl"
            >
              {copied ? "Copied" : "Copy"}
            </Button>
          )}
        </CopyButton>
      </Group>
      <Group gap={4} justify="center">
        <Button
          component={Link}
          href="whatever.com"
          variant="transparent"
          color="blue"
          size="compact-xs"
        >
          Buy on Jupiter
        </Button>
        <Button
          component={Link}
          href="whatever.com"
          variant="transparent"
          color="blue"
          size="compact-xs"
        >
          Stonckfun
        </Button>
      </Group>
    </Stack>
  )
}
