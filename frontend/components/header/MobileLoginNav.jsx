"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import {
  FaHouse,
  FaArrowRightFromBracket,
  FaUserPlus,
  FaBars,
} from "react-icons/fa6";

const links = [
  {
    name: "home",
    path: "/",
    icon: <FaHouse />,
  },
  {
    name: "login",
    path: "/login",
    icon: <FaArrowRightFromBracket />,
  },
  {
    name: "signup",
    path: "/register",
    icon: <FaUserPlus />,
  },
];

const MobileLoginNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <FaBars className="text-xl text-foreground" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mx-auto px-4 py-8">
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
                className={`flex flex-row gap-2 capitalize text-sm font-medium hover:text-foreground hover:border-foreground transition-all h-7 items-center ${
                  link.path === pathname
                    ? "text-foreground border-b border-foreground"
                    : "text-foreground/70"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileLoginNav;
