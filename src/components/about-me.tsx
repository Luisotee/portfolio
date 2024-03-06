/* eslint-disable react/no-unescaped-entities */
import { Center, Stack, Text, Title } from "@mantine/core";

export function AboutMe() {
  return (
    <div data-aos="zoom-in">
      <Stack align="center">
        <Title order={1}> About Me </Title>
        <Text>
          Hello, I'm Luis Otavio, a 22-year-old Brazilian hailing from the
          charming city of Sorocaba. I'm a dedicated computer engineering
          student and a passionate software developer on a perpetual quest for
          knowledge and innovation. My journey in the world of technology has
          taken me through the realms of JavaScript, TypeScript, React, React
          Native, and Node.js, shaping me into a versatile developer with a
          penchant for creating meaningful projects, all of which I proudly
          showcase on my GitHub profile.
        </Text>
        <Text>
          I'm fueled by my passion for technology and a relentless drive to
          learn and create. Feel free to connect with me on LinkedIn or explore
          my GitHub repositories to dive deeper into my projects and expertise.
          I'm excited about what the future holds and look forward to
          collaborating with fellow enthusiasts in the world of technology.
        </Text>
      </Stack>
    </div>
  );
}
