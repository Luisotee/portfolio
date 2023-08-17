import {
  Button,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Group,
} from "@mantine/core";
import { useEffect, useState } from "react";

export function AboutMe() {
  const [reposcount, setReposCount] = useState(0);
  const [yearsExp, setYearsExp] = useState(0);
  async function getReposCount() {
    const response = await fetch(`https://api.github.com/users/Luisotee`);
    if (response.ok) {
      const { public_repos, created_at } = await response.json();
      setReposCount(public_repos);
      let accountCreationDate = new Date(created_at);
      let currentDate = new Date();
      let yearsSinceCreation =
        currentDate.getFullYear() - accountCreationDate.getFullYear();

      setYearsExp(yearsSinceCreation);
    }
  }

  useEffect(() => {
    (async () => {
      await getReposCount();
    })();
  }, []);

  return (
    <Stack align="center">
      <Image
        src="50471205.jpg"
        alt="Profile picture"
        width={250}
        height={250}
        radius={296}
      />
      <Title order={2}>Hello, I&apos;m Luís!</Title>
      <Title order={1}>
        I build websites, apps, platforms and whatever I find cool.
      </Title>
      <Text>
        A software developer aiming to become a good full stack dev, though
        there is a long way ahead.
      </Text>
      <SimpleGrid cols={2} spacing={150}>
        <Group>
          <Title order={1}>{yearsExp}</Title>
          <Stack spacing={0}>
            <Text>Years since</Text>
            <Text>I started</Text>
          </Stack>
        </Group>
        <Group>
          <Title order={1}>{reposcount}</Title>
          <Stack spacing={0}>
            <Text>Public projects</Text>
            <Text>I developed</Text>
          </Stack>
        </Group>
      </SimpleGrid>
      <Button radius="xl" size="lg" variant="outline" mt="lg">
        RESUME
      </Button>
    </Stack>
  );
}
