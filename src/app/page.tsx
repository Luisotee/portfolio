"use client";

import { AboutMe } from "@/components/about-me";
import { HeaderMain } from "@/components/header-main";
import { HomePage } from "@/components/home-page";
import { Projects } from "@/components/projects/projects";
import { Container, Space } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const spaceHeight = isMobile ? 100 : 200;

  return (
    <>
      <HeaderMain />
      <Container>
        <Space h={spaceHeight} />
        <div id="home">
          <HomePage />
        </div>
        <Space h={spaceHeight} />
        <div id="about-me">
          <AboutMe />
        </div>
        <Space h={spaceHeight} />
        <div id="projects">
          <Projects />
        </div>
      </Container>
    </>
  );
}
