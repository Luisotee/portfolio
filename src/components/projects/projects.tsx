import { Title } from "@mantine/core";
import { ProjectsCard } from "./projects-card";

export function Projects() {
  return (
    <>
      <Title order={1} align="center">
        Projects
      </Title>
      <ProjectsCard />
    </>
  );
}
