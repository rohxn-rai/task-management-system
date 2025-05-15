import NavLinks from "@/components/dashboard/NavLinks";
import Header from "@/components/header/Header";

import { cn } from "@/lib/utils";

export const metadata = {
  title: "Task Management System | Dashboard",
  description: "Dashboard",
};

const AuthRoute = ({ children }) => {
  return (
    <>
      <Header />

      <div
        className={cn(
          "container mx-auto border border-t-0 sticky ",
          "top-12 bg-background/95 backdrop-blur ",
          "supports-[backdrop-filter]:bg-background/50 "
        )}
      >
        <div className="px-6">
          <NavLinks />
        </div>
      </div>

      {/* page layout */}
      <div
        className={cn(
          "container border-x  mx-auto ",
          "flex flex-col min-h-[calc(100vh-170px)] ",
          "sm:min-h-[calc(100vh-154px)] "
        )}
      >
        {children}
      </div>
    </>
  );
};

export default AuthRoute;
