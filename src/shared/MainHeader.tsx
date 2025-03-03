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
import { Menu } from "lucide-react";
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
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={<Menu />}
                  radius="sm"
                  variant="light"
                >
                  Features
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps based on demand and load"
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues"
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us at web scale"
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="High availability and uptime guarantees"
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Support team ready to respond"
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {headerMenus?.map((menu, index) => {
            if (menu.children) {
              return <Dropdown>
                <DropdownTrigger>
                  <p className="cursor-pointer">Open Menu</p>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">


                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem>
                  <DropdownItem key="delete" className="text-danger" color="danger">
                    Delete file
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
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
              )
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
