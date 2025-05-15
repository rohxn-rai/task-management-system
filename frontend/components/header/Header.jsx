import Link from "next/link";

import UserControlCenter from "@/components/header/UserControlCenter";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container mx-auto border-x px-5 flex justify-between items-center gap-2 md:gap-4">
        {/* lgoo */}
        <div className="flex gap-8">
          <Link href="/dashboard">
            <h1 className="font-bold">TMS</h1>
          </Link>
        </div>

        <div className="flex items-center h-[47px]">
          {/* both menu */}
          <UserControlCenter />
        </div>
      </div>
    </header>
  );
};

export default Header;
