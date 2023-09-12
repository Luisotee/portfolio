import {
  Button,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Group,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";

export function HomePage() {
  const [reposcount, setReposCount] = useState(0);
  const [yearsExp, setYearsExp] = useState(0);
  const isMobile = useMediaQuery("(max-width: 600px)");

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
    <>
      <Stack align="center">
        <Stack
          align="center"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
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
        </Stack>
        <SimpleGrid cols={2} spacing={150} mt="xl">
          <Group
            data-aos={!isMobile ? "fade-right" : undefined}
            data-aos-duration={!isMobile ? 1500 : undefined}
            data-aos-once={!isMobile ? true : undefined}
          >
            <Title order={1}>{yearsExp}</Title>
            <Stack spacing={0}>
              <Text>Years since</Text>
              <Text>I started developing</Text>
            </Stack>
          </Group>
          <Group
            data-aos={!isMobile ? "fade-left" : undefined}
            data-aos-duration={!isMobile ? 1500 : undefined}
            data-aos-once={!isMobile ? true : undefined}
          >
            <Title order={1}>{reposcount}</Title>
            <Stack spacing={0}>
              <Text>Public projects</Text>
              <Text>I developed</Text>
            </Stack>
          </Group>
        </SimpleGrid>
        <Button
          radius="xl"
          size="lg"
          variant="outline"
          mt="xl"
          component="a"
          data-aos={!isMobile ? "fade-up" : undefined}
          data-aos-duration={!isMobile ? 1500 : undefined}
          data-aos-once={!isMobile ? true : undefined}
          href="https://seducsp-my.sharepoint.com/:b:/g/personal/regilenemartins_professor_educacao_sp_gov_br/EcAQPTOQdypGgldTO8XSVrYBLIrcbAU2PA-bbgiKXWVDYg?e=OlRFod"
        >
          RESUME
        </Button>
      </Stack>
    </>
  );
}
