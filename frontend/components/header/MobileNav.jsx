"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { FaArrowRightFromBracket, FaBars } from "react-icons/fa6";

const links = [
  { name: "dashboard", path: "/dashboard" },
  { name: "your tasks", path: "/your-tasks" },
  { name: "claim task", path: "/claim-task" },
  { name: "create task", path: "/create-task" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <FaBars className="text-xl text-foreground" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mx-auto py-8">
          <Link href="/dashboard">
            <h1 className="text-4xl font-semibold">TMS</h1>
          </Link>
        </div>

        <VisuallyHidden>
          <DialogTitle>Menu</DialogTitle>
        </VisuallyHidden>

        <nav className="flex flex-col justify-center items-center gap-4">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`capitalize text-sm font-medium hover:text-foreground hover:border-foreground transition-all h-7 ${
                  link.path === pathname
                    ? "text-foreground border-b border-foreground"
                    : "text-foreground/70"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Button variant="danger" size="lg" type="button">
            Logout <FaArrowRightFromBracket />
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
