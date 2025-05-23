"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";

const ListItem = ({ className, title, children, href, ...props }) => {
  const linkRef = useRef(null);

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={linkRef}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

export default ListItem;
