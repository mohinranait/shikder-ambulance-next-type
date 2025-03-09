"use client";
import { Image, LayoutDashboard, LayoutList, User, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useCallback } from "react";
import {
  MdCancel,
  MdOutlineAlignHorizontalLeft,
  MdOutlineNewLabel,
} from "react-icons/md";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";

type ReactSidebarProTypes = {
  isLeftBar: boolean;
  setIsLeftBar: React.Dispatch<React.SetStateAction<boolean>>;
};

// Sidebar Menu Items
const menuItems = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard size={16} />,
    path: "/admin/dashboard",
  },
  {
    label: "Manage Posts",
    icon: <LayoutList size={16} />,
    subMenu: [
      { label: "New Post", icon: <MdOutlineNewLabel />, path: "/admin/post" },
      {
        label: "All Posts",
        icon: <MdOutlineAlignHorizontalLeft />,
        path: "/admin/all-posts",
      },
    ],
  },
  {
    label: "Media",
    icon: <Image size={18} />,
    path: "/admin/file-media",
  },
  {
    label: "Manage Users",
    icon: <Users size={18} />,
    subMenu: [{ label: "Active Users", icon: <User size={18} />, path: "#" }],
  },
];

const ReactSidebarPro: FC<ReactSidebarProTypes> = ({
  isLeftBar,
  setIsLeftBar,
}) => {
  const pathname = usePathname();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const closeSidebar = useCallback(() => setIsLeftBar(false), [setIsLeftBar]);

  return (
    <div>
      <div
        className={clsx(
          "bg-white min-h-screen transition-all duration-500",
          isTabletOrMobile
            ? isLeftBar
              ? "fixed left-0 top-0 bottom-0 z-[99]"
              : "fixed -left-full top-0 bottom-0"
            : "hidden lg:block sticky top-0 left-0"
        )}
      >
        {/* Close Button for Mobile */}
        {isTabletOrMobile && (
          <span
            className="absolute right-3 top-4 z-20 cursor-pointer lg:hidden"
            onClick={closeSidebar}
          >
            <MdCancel size={26} />
          </span>
        )}

        {/* Sidebar */}
        <Sidebar className="h-full bg-white">
          <div className="flex h-[66px] items-center border-b border-slate-200 pl-4 text-lg font-bold">
            Logo
          </div>

          <Menu>
            {menuItems.map((item, index) => {
              // Check if the current route matches a submenu item
              const isSubMenuActive =
                item.subMenu?.some((subItem) => pathname === subItem.path) ??
                false;

              return item.subMenu ? (
                <SubMenu
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  defaultOpen={isSubMenuActive}
                >
                  {item.subMenu.map((subItem, subIndex) => (
                    <MenuItem
                      key={subIndex}
                      icon={subItem.icon}
                      component={<Link href={subItem.path} />}
                      className={
                        pathname === subItem.path
                          ? "bg-gray-200 text-primary "
                          : ""
                      }
                    >
                      {subItem.label}
                    </MenuItem>
                  ))}
                </SubMenu>
              ) : (
                <MenuItem
                  key={index}
                  icon={item.icon}
                  component={<Link href={item.path} />}
                  className={
                    pathname === item.path ? "bg-gray-200 text-primary " : ""
                  }
                >
                  {item.label}
                </MenuItem>
              );
            })}
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
};

export default ReactSidebarPro;
