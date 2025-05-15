import Link from "next/link";

import { Button } from "../ui/button";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full border-t">
      <div className="container mx-auto border-x  px-5 py-4 flex justify-between items-center">
        {/* lgoo */}

        <div className="flex flex-col sm:flex-row sm:gap-3">
          <h1 className="text-xl font-semibold">Made by -</h1>
          <p className="text-md text-foreground/70 self-start sm:self-end">
            Rohan Rai
          </p>
        </div>

        {/* socials */}
        <div className="grid grid-flow-col grid-cols-2 gap-4">
          <Link
            href="https://github.com/rohxn-rai"
            className="h-[36px] w-[36px]"
          >
            <Button variant="ghost" size="icon">
              <FaGithub className="size-6 md:size-8" />
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/rohxnrai/"
            className="h-[36px] w-[36px]"
          >
            <Button variant="ghost" size="icon">
              <FaLinkedin className="size-6 md:size-8" />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
