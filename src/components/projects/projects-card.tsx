/* eslint-disable jsx-a11y/alt-text */
import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";

const projects = [
  {
    title: "WhatsApp Chatbot Assistant",
    image: "WhatsApp.svg",
    desc: "A WhatsApp chatbot that utilizes Bing AI and LangChain to enhance its conversational capabilities.",
    href: "https://github.com/WAppAI/assistant",
  },
  {
    title: "LangChain Google Routes Tool",
    image: "langchain-seeklogo.svg",
    desc: "A tool that helps getting information from Google Routes API to a LLM model.",
    href: "https://github.com/langchain-ai/langchainjs/pull/5329",
  },
  {
    title: "Voting Bot",
    image: "puppeteer-seeklogo.svg",
    desc: "A bot that automates the voting process for a game using Puppeteer and GPT-4o for CAPTCHA solving.",
    href: "https://www.linkedin.com/posts/luisotee_excited-to-share-my-latest-project-an-automated-activity-7199546907998777344-YggO?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Android Tax Calculator",
    image: "adaptive-icon.png",
    desc: "Streamlined Android tax calculator app for Brazilian taxpayers, simplifying income tax calculations with precision.",
    href: "https://github.com/Luisotee/CalculadoraIRPFAndroid",
  },
  {
    title: "Ip Address Tracker",
    image: "nextjs-icon.svg",
    desc: "IP localization website",
    href: "https://github.com/Luisotee/ip-address-tracker",
  },
  {
    title: "Help Facul",
    image: "book.png",
    desc: "A university project showcasing a website where students can promote themselves as private teachers.",
    href: "https://github.com/Luisotee/HelpFacul",
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: theme.shadows.md,
    },
  },
}));

export function ProjectsCard() {
  const { classes } = useStyles();
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cards = projects.map((project) => (
    <div key={project.title} data-aos="flip-left" style={{ width: "100%" }}>
      <Card
        p="md"
        radius="md"
        component="a"
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.card}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        h="100%"
      >
        <Card.Section>
          <AspectRatio ratio={1920 / 1080}>
            <Image src={project.image} height={isMobile ? 170 : 230} />
          </AspectRatio>
        </Card.Section>

        <Text fw={700} mt="md">
          {project.title}
        </Text>
        <Text mt={5}> {project.desc}</Text>
      </Card>
    </div>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}
