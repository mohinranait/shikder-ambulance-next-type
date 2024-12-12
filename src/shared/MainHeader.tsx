"use client";
import React, { FC, useEffect, useState } from "react";
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
import { useAuth } from "@/providers/AuthProvider";
// import { usePathname } from "next/navigation";

const MainHeader: FC = () => {
  const { user, isLoading } = useAuth();
  const path = usePathname();

  const [userLabel, setUserLabel] = useState<string>("");

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

          <NavbarItem>
            {isLoading ? (
              <span className="w-8 h-8 font-semibold rounded-full ring-1 ring-offset-2  bg-slate-200  flex items-center justify-center"></span>
            ) : user ? (
              <span className="w-8 h-8 font-semibold rounded-full ring-1 ring-offset-2 ring-primary bg-primary text-white flex items-center justify-center">
                {user?.name?.firstName?.slice(0, 1)}
              </span>
            ) : (
              <Button as={Link} color="primary" href="/login" variant="flat">
                Login
              </Button>
            )}
          </NavbarItem>
        </NavbarContent>
      </div>
    </Navbar>
  );
};

export default MainHeader;
