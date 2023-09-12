import { Divider, Drawer, ScrollArea, rem } from "@mantine/core";

interface HeaderDrawerProps {
  drawerOpened: boolean;
  closeDrawer: () => void;
  classes: any;
  theme: any; // You might want to use a more specific type for the theme
  handleProjectsClick: any;
  handleAboutMeClick: any;
  handleHomePageClick: any;
}

export function HeaderDrawer({
  drawerOpened,
  closeDrawer,
  classes,
  theme,
  handleHomePageClick,
  handleAboutMeClick,
  handleProjectsClick,
}: HeaderDrawerProps) {
  return (
    <Drawer
      opened={drawerOpened}
      onClose={closeDrawer}
      size="70%"
      padding="md"
      title="Navigation"
      className={classes.hiddenDesktop}
      zIndex={100000}
    >
      <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
        <Divider
          my="sm"
          color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
        />

        <a onClick={handleHomePageClick} className={classes.link}>
          Home
        </a>
        <a onClick={handleAboutMeClick} className={classes.link}>
          About Me
        </a>
        <a onClick={handleProjectsClick} className={classes.link}>
          Projects
        </a>

        <Divider
          my="sm"
          color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
        />
      </ScrollArea>
    </Drawer>
  );
}
