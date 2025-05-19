import Link from "next/link";

import LoginNav from "./LoginNav";
import MobileLoginNav from "./MobileLoginNav";

const LoginHeader = () => {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container mx-auto border-x px-5 flex justify-between items-center">
        {/* lgoo */}
        <div className="flex gap-8">
          <Link href="/">
            <h1 className="font-bold">TMS</h1>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <LoginNav />
          </div>

          {/* mobile menu */}
          <div className="md:hidden h-[47px] pt-[13px]">
            <MobileLoginNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default LoginHeader;
