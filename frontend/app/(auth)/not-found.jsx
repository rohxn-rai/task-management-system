import { Button } from "@/components/ui/button";
import Link from "next/link";

const AuthPageNotFound = () => {
  return (
    <>
      <div className="flex justify-center px-5 pt-8 pb-12 min-h-[calc(100vh-182px)] sm:min-h-[calc(100vh-166px)] items-center">
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-4xl">Page Not Found!</h1>
          <p className="text-foreground/70">Error(404) - Not Found!</p>

          <Link href="/">
            <Button variant="default" size="lg" type="button ">
              Go Back Home
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AuthPageNotFound;
