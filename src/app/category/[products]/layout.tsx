import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Category | Junonia",
  description: "",
};

export default function ConatctLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
