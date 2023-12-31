import {
  ActionIcon,
  Burger,
  Container,
  Group,
  Header,
  Text,
  createStyles,
  rem,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { SwitchToggle } from "./dark-theme-switch";
import { HeaderDrawer } from "./header-drawer";

const useStyles = createStyles((theme) => ({
  fixedTopBar: {
    position: "fixed", // Make the header fixed
    top: 0, // Position it at the top of the viewport
    width: "100%", // Take up the full width
    zIndex: 1000, // Adjust the z-index as needed
    background:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  inner: {
    height: rem(58),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: rem(260),
  },

  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
  },
}));

export function HeaderMain() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();

  function handleHomePageClick(event: any) {
    event.preventDefault();
    const aboutMeSection = document.getElementById("home");

    if (aboutMeSection) {
      const headerHeight = 200;
      const offset = headerHeight;

      window.scrollTo({
        top: aboutMeSection.offsetTop - offset,
        behavior: "smooth",
      });
    }
  }

  function handleAboutMeClick(event: any) {
    event.preventDefault();
    const aboutMeSection = document.getElementById("about-me");

    if (aboutMeSection) {
      const headerHeight = 200;
      const offset = headerHeight;

      window.scrollTo({
        top: aboutMeSection.offsetTop - offset,
        behavior: "smooth",
      });
    }
  }
  function handleProjectsClick(event: any) {
    event.preventDefault();
    const aboutMeSection = document.getElementById("projects");

    if (aboutMeSection) {
      const headerHeight = 90;
      const offset = headerHeight;

      window.scrollTo({
        top: aboutMeSection.offsetTop - offset,
        behavior: "smooth",
      });
    }
  }

  return (
    <Header height={56} mb={50} className={classes.fixedTopBar}>
      <Container>
        <div className={classes.inner}>
          <Group spacing="sm" className={classes.social} position="left" noWrap>
            <ActionIcon
              size="lg"
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Luisotee"
            >
              <IconBrandGithub size="1.7rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              size="lg"
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/luisotee/?locale=en_US"
            >
              <IconBrandLinkedin size="1.7rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              size="lg"
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/luisotee_/"
            >
              <IconBrandInstagram size="1.7rem" stroke={1.5} />
            </ActionIcon>
          </Group>
          <Group spacing="xs" className={classes.hiddenMobile}>
            <Button variant="subtle" onClick={handleHomePageClick}>
              HOME
            </Button>
            <Button variant="subtle" onClick={handleAboutMeClick}>
              ABOUT ME
            </Button>
            <Button variant="subtle" onClick={handleProjectsClick}>
              PROJECTS
            </Button>
          </Group>
          <Group position="right" className={classes.hiddenMobile}>
            <SwitchToggle />
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
            size="sm"
          />

          <HeaderDrawer
            drawerOpened={drawerOpened}
            closeDrawer={closeDrawer}
            classes={classes}
            theme={theme}
            handleProjectsClick={handleProjectsClick}
            handleAboutMeClick={handleAboutMeClick}
            handleHomePageClick={handleHomePageClick}
          />
        </div>
      </Container>
    </Header>
  );
}
