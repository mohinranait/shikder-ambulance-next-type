"use client";
import React, { FC } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import ThemeModalButton from "@/components/themes/ThemeModalButton";
import { headerMenus } from "@/config/constData";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { usePathname } from "next/navigation";

const MainHeader: FC = () => {
  const path = usePathname();
  console.log(path);

  return (
    <Navbar
      className=" w-full main_header bg-transparent i px-0 "
      maxWidth="full"
    >
      <div className="container flex items-center ">
        <NavbarBrand>
          <Link href={"/"} className="font-bold text-inherit">
            SKA
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {headerMenus?.map((menu, index) => (
            <NavbarItem key={index}>
              <Link
                color="foreground"
                href={menu?.path}
                className={`${path == menu?.path ? "text-primary" : ""}`}
              >
                {menu?.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <ThemeModalButton />
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </div>
    </Navbar>
  );
};

export default MainHeader;
