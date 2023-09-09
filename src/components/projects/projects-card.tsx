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

const projects = [
  {
    title: "Sydney WhatsApp Assistant",
    image: "Bing_Chat_2023.svg",
    desc: "A WhatsApp chatbot that leverages Bing AI's conversational capabilities.",
    href: "https://github.com/veigamann/sydney-whatsapp-chatbot",
  },
  {
    title: "Android Tax Calculator",
    image:
      "https://github.com/Luisotee/CalculadoraIRPFAndroid/blob/main/assets/adaptive-icon.png?raw=true",
    desc: "Brazilian tax calculation APP",
    href: "https://github.com/Luisotee/CalculadoraIRPFAndroid",
  },
  {
    title: "Help Facul",
    image: "book.png",
    desc: "A university project showcasing a website where students can promote themselves as private teachers.",
    href: "https://github.com/Luisotee/HelpFacul",
  },
  {
    title: "Ip Address Tracker",
    image: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
    desc: "IP localization website",
    href: "https://github.com/Luisotee/ip-address-tracker",
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },
}));

export function ProjectsCard() {
  const { classes } = useStyles();

  const cards = projects.map((project) => (
    <Card
      key={project.title}
      p="md"
      radius="md"
      component="a"
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.card}
      data-aos="flip-left"
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={project.image} />
      </AspectRatio>
      <Text fw={700} mt="md">
        {project.title}
      </Text>
      <Text mt={5}> {project.desc}</Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}
