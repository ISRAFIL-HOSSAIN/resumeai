import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import { MobileMenu } from "./MobileMenu";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./Toggle";

export function Navbar() {
  return (
    <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
      <div className="md:col-span-3">
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            Resume
            <span className="text-primary">AI</span>
          </h1>
        </Link>
      </div>
      <NavbarLinks />
      <div className="flex items-center gap-x-2 ms-auto md:col-span-3 ">
        <div>
          <ModeToggle />
        </div>
        <div className="hidden lg:flex space-x-2">
          <Button className="rounded-3xl px-5">Login</Button>
          <Button variant={"secondary"} className="rounded-3xl px-4">
            Register
          </Button>
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
