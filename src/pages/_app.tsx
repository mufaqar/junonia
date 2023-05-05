import { SettingsProvider } from "@/context/setting-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import HeaderLayout from "@/components/header";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SettingsProvider>
        <ThemeProvider attribute="class">
        <HeaderLayout />
        <Component {...pageProps} />
        </ThemeProvider>
      </SettingsProvider>
    </>
  );
}
