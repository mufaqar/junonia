import { SettingsContext } from "@/context/setting-context";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const Logo = () => {
  const {
    darkMode,
    headerClr
  } = useContext(SettingsContext);
  return (
    <Link href="/" className="w-36 md:w-52 ">
      {
        darkMode ? <Image src="/assets/images/logo-white.png" alt="logo" width={160} height={60} className={`mx-auto invert-0 ${!headerClr && 'invert'}`} /> : 
        <Image src="/assets/images/logo-white.png" alt="logo" width={160} height={60} className={`mx-auto ${headerClr ? '' : 'invert'}`} />
      }
    </Link>
  );
};

export default Logo;
