"use client";

import { ThemeProvider } from "next-themes";
import "./globals.css";
import { SettingsProvider } from "@/context/setting-context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`dark:bg-dark-gray`}>
        <ThemeProvider attribute="class">
          <SettingsProvider>{children}</SettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
