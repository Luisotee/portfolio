"use client";

import { AboutMe } from "@/components/about-me";
import { HeaderMain } from "@/components/header-main";
import { HomePage } from "@/components/home-page";
import { Projects } from "@/components/projects/projects";
import { Container, Space } from "@mantine/core";

export default function Home() {
  return (
    <>
      <HeaderMain />
      <Container>
        <Space h={200} />
        <div id="home">
          <HomePage />
        </div>
        <Space h={200} />
        <div id="about-me">
          <AboutMe />
        </div>
        <Space h={200} />
        <div id="projects">
          <Projects />
        </div>
      </Container>
    </>
  );
}
