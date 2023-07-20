
import Image from "next/image";
import Link from "next/link";

const Logo = ({darkMode,headerClr}:any) => {
    return (
    <Link href="/" className="w-36 md:w-52 ">
    {
      darkMode ? <Image src="/assets/images/logo-white.png" alt="logo" width={160} height={60} className={`mx-auto invert-0 ${!headerClr && 'invert'}`} /> : 
      <Image src="/assets/images/logo-white.png" alt="logo" width={160} height={60} className={`mx-auto ${headerClr ? '123' : 'invert'}`} />
    }
  </Link>
  );
};

export default Logo;
