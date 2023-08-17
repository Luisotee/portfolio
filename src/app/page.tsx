"use client";

import { AboutMe } from "@/components/about-me";
import { HeaderMain } from "@/components/header-main";
import { Image, Container, Stack } from "@mantine/core";

export default function Home() {
  return (
    <>
      <HeaderMain />
      <AboutMe />
    </>
  );
}
