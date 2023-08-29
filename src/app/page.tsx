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
        <Space h={100} />
        <HomePage />
        <Space h={300} />
        <AboutMe />
        <Space h={150} />
        <Projects />
      </Container>
    </>
  );
}
