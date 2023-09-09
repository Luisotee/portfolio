"use client";

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
    });
  }, []);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme: colorScheme,
          colors: {
            // override dark colors to change them for all components
            dark: [
              "#d5d7e0",
              "#acaebf",
              "#8c8fa3",
              "#666980",
              "#4d4f66",
              "#34354a",
              "#2b2c3d",
              "#1d1e30",
              "#0c0d21",
              "#01010a",
            ],
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
