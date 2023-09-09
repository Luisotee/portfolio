import { Title } from "@mantine/core";
import { ProjectsCard } from "./projects-card";

export function Projects() {
  return (
    <div data-aos="fade-in">
      <Title order={1} align="center">
        Projects
      </Title>
      <ProjectsCard />
    </div>
  );
}
