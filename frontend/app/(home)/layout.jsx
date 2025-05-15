import LoginHeader from "@/components/header/LoginHeader";

import { cn } from "@/lib/utils";

export const metadata = {
  title: "Task Management System",
  description: "HomePage",
};

const LoginLayout = ({ children }) => {
  return (
    <>
      <LoginHeader />

      <div
        className={cn(
          "container border-x  mx-auto ",
          "flex flex-col min-h-[calc(100dvh-132px)] ",
          "sm:min-h-[calc(100dvh-117px)]"
        )}
      >
        {children}
      </div>
    </>
  );
};

export default LoginLayout;
