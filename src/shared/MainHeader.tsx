"use client";
import React, { FC, useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import ThemeModalButton from "@/components/themes/ThemeModalButton";
import { headerMenus } from "@/config/constData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
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
            <Image src={"/Shikder-ambulance-service-logo-260-66.png"} width={260} height={66} alt="Shikder Ambulance Logo" />
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {headerMenus?.map((menu, index) => {
            if (menu.children) {
              return (
                <Dropdown key={index}>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className="p-0 text-base bg-transparent data-[hover=true]:bg-transparent"
                      endContent={<ChevronDown size={14} className="text-xs" />}
                      radius="sm"
                      variant="light"
                    >
                      Service
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Static Actions"
                    className="w-48 space-y-6 rounded-sm"
                  >
                    {menu?.children?.map((child, index) => {
                      return (
                        <DropdownItem key={index}>
                          <Link
                            href={child?.path}
                            className="py-2 inline-block"
                          >
                            {child?.label}
                          </Link>
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </Dropdown>
              );
            } else {
              return (
                <NavbarItem key={index}>
                  <Link
                    color="foreground"
                    href={menu?.path}
                    className={`${path == menu?.path ? "text-primary" : ""}`}
                  >
                    {menu?.label}
                  </Link>
                </NavbarItem>
              );
            }
          })}
        </NavbarContent>
        <NavbarContent justify="end">
          {/* <ThemeModalButton /> */}

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
