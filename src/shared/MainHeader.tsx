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
import { useSession } from "next-auth/react";
// import { usePathname } from "next/navigation";

const MainHeader: FC = () => {
  const path = usePathname();
  const { status, data } = useSession();
  console.log(data);

  const [userLabel, setUserLabel] = useState<string>("");
  console.log(data?.user?.name);

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
            {status == "loading" ? (
              <span className="w-8 h-8 font-semibold rounded-full ring-1 ring-offset-2  bg-slate-200  flex items-center justify-center"></span>
            ) : status == "authenticated" ? (
              <span className="w-8 h-8 font-semibold rounded-full ring-1 ring-offset-2 ring-primary bg-primary text-white flex items-center justify-center">
                ME
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
