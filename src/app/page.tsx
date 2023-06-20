

import { Metadata } from "next";
import Home1 from "./home/home1/page";

export const metadata: Metadata = {
  title: 'Junonia',
  description: '',
};

export default function Home() {
  return (
    <>
      <Home1/>
    </>
  );
}
