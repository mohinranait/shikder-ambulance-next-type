"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Divider,
} from "@nextui-org/react";

import { useAuth } from "@/providers/AuthProvider";
import { Earth, LogOut, Menu, Search, Settings } from "lucide-react";

import React, { FC } from "react";
import Image from "next/image";
import { GiPostStamp } from "react-icons/gi";
import { SiPostcss } from "react-icons/si";

type ReactSidebarProTypes = {
  isLeftBar?: boolean;
  setIsLeftBar?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
};

const Navbar: FC<ReactSidebarProTypes> = ({ setIsLeftBar }) => {
  const { signOut, user } = useAuth();
  console.log(user);

  return (
    <div className="sticky z-50 w-full right-0 top-0">
      <div className="flex  w-full z-30 flex-col items-center justify-between gap-3 bg-white px-6 py-2 text-center text-xl shadow-sm md:flex-row lg:h-[66px]">
        <div className="flex w-full items-center gap-5">
          <span
            className="cursor-pointer lg:hidden"
            onClick={() => setIsLeftBar && setIsLeftBar(true)}
          >
            <Menu />
          </span>
          <div className="relative w-full md:w-auto">
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2"
            />
            <input
              placeholder="Search"
              type="search"
              className="h-auto w-full border border-slate-300 focus-visible:outline-offset-0 rounded-md py-[6px] pl-10 pr-4 placeholder:text-gray-300 focus-visible:border-primary focus-visible:outline-primary md:w-[300px]"
            />
          </div>
        </div>
        <div className="w-full md:w-auto">
          <ul className="flex items-center gap-5 lg:justify-end">
            <li>
              <Dropdown>
                <DropdownTrigger>
                  <div className="flex items-center gap-2">
                    <span className="w-8  h-8 cursor-pointer rounded-full flex items-center justify-center">
                      {user?.profile ? (
                        <Image
                          src={user?.profile}
                          width={40}
                          height={40}
                          alt="Avater"
                        />
                      ) : (
                        <span className="capitalize bg-primary w-full h-full flex items-center justify-center rounded-full text-white">
                          {user?.name?.firstName?.slice(0, 1)}
                        </span>
                      )}
                    </span>
                  </div>
                </DropdownTrigger>
                <DropdownMenu
                  className="!rounded flex flex-col gap-2 min-w-52"
                  aria-label="Static Actions"
                >
                  <DropdownItem className="py-1 mb-2 border-b border-slate-200 rounded-sm">
                    <div className="pb-2">
                      <div className="flex mb-2 justify-center">
                        <span className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                          <p className="text-4xl text-white font-semibold">
                            {user?.name?.firstName?.slice(0, 1)}
                          </p>
                        </span>
                      </div>
                      <div>
                        <p className="text-center text-base">{`${user?.name?.firstName} ${user?.name?.lastName}`}</p>
                        <p className="text-center text-sm text-slate-500">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </DropdownItem>

                  <DropdownItem
                    className="py-[6px] hover:bg-slate-100 rounded-sm"
                    key="edit"
                    startContent={<SiPostcss className="w-4" />}
                  >
                    Posts
                  </DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger py-1 hover:bg-danger hover:rounded-sm hover:text-white rounded-sm"
                    color="danger"
                    onClick={() => signOut()}
                    startContent={<LogOut className="text-sm w-4" />}
                  >
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <span>
                <Settings />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
