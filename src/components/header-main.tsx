import {
  ActionIcon,
  Burger,
  Container,
  Group,
  Header,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { SwitchToggle } from "./dark-theme-switch";

const useStyles = createStyles((theme) => ({
  inner: {
    height: rem(58),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: rem(260),
  },
}));

export function HeaderMain() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <Header height={56} mb={50}>
      <Container>
        <div className={classes.inner}>
          <Group spacing="sm" className={classes.social} position="left" noWrap>
            <ActionIcon
              size="lg"
              component="a"
              href="https://github.com/Luisotee"
            >
              <IconBrandGithub size="1.7rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              size="lg"
              component="a"
              href="https://www.linkedin.com/in/luisotee/?locale=en_US"
            >
              <IconBrandLinkedin size="1.7rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              size="lg"
              component="a"
              href="https://www.instagram.com/luisotee_/"
            >
              <IconBrandInstagram size="1.7rem" stroke={1.5} />
            </ActionIcon>
          </Group>
          <Group spacing="xl">
            <Text>ABOUT ME</Text>
            <Text>PROJECTS</Text>
            <Text>CONTACT ME</Text>
          </Group>
          <Group position="right">
            <SwitchToggle />
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </div>
      </Container>
    </Header>
  );
}
