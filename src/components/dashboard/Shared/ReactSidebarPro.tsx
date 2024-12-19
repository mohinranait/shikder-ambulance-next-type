"use client";
import { Image, Plus, User, Users } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";
import { FaPenRuler } from "react-icons/fa6";
import {
  MdCancel,
  MdDashboard,
  MdOutlineAlignHorizontalLeft,
  MdOutlineNewLabel,
} from "react-icons/md";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useMediaQuery } from "react-responsive";

type ReactSidebarProTypes = {
  isLeftBar: boolean;
  setIsLeftBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const ReactSidebarPro: FC<ReactSidebarProTypes> = ({
  isLeftBar,
  setIsLeftBar,
}) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div className="">
      <div
        className={`  ${
          isTabletOrMobile
            ? ` ${
                isLeftBar ? "left-0" : "-left-full"
              } fixed z-[99] bottom-0 top-0  bg-white transition-all duration-1000`
            : "hidden  lg:block !top-0 !left-0 sticky "
        } bg-white min-h-screen `}
      >
        <span
          className="absolute right-3 top-4 z-20 cursor-pointer lg:hidden"
          onClick={() => setIsLeftBar(false)}
        >
          <MdCancel size={26} />
        </span>
        <Sidebar
          // style={{
          //     position: 'fixed',
          //     top: 0,
          //     left: !isTabletOrMobile ? 0 : isLeftBar ? 0 : '-100%',
          //     height: '100vh',
          //     transition: 'left 0.3s ease',
          //     zIndex: 1000,
          // }}
          className="h-full bg-white"
        >
          <div>
            <div
              className="flex h-[66px] items-center border-b border-slate-200 pl-4"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              logo
            </div>
          </div>
          <Menu className="">
            <MenuItem
              icon={<MdDashboard size={20} />}
              component={<Link href="/admin/dashboard" />}
            >
              Dashboard
            </MenuItem>

            <SubMenu icon={<FaPenRuler size={16} />} label="Manage Posts">
              <MenuItem
                icon={<MdOutlineAlignHorizontalLeft />}
                component={<Link href="/admin/all-posts" />}
              >
                All Posts
              </MenuItem>
              <MenuItem
                icon={<MdOutlineNewLabel />}
                component={<Link href="/admin/post" />}
              >
                {" "}
                New post{" "}
              </MenuItem>
            </SubMenu>
            <MenuItem
              icon={<Image size={18} />}
              component={<Link href="/admin/file-media" />}
            >
              Media
            </MenuItem>
            <SubMenu icon={<Users size={18} />} label="Manage users">
              <MenuItem icon={<User size={18} />} component={<Link href="#" />}>
                Active users{" "}
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
};

export default ReactSidebarPro;
