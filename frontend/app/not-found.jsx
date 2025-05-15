import Link from "next/link";

import NotFoundHeader from "@/components/header/NotFoundHeader";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const HomePageNotFound = () => {
  return (
    <>
      <NotFoundHeader />

      <div
        className={cn(
          "container border-x  mx-auto ",
          "grid grid-cols-1 gap-4 sm:gap-10",
          "min-h-[calc(100vh-182px)] sm:min-h-[calc(100dvh-134px)]"
        )}
      >
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-4xl">Page Not Found!</h1>
          <p className="text-foreground/70">Error(404) - Not Found!</p>

          <Link href="/">
            <Button
              variant="default"
              size="lg"
              type="button"
              className="cursor-pointer"
            >
              Go Back Home
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePageNotFound;
