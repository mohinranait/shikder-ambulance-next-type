"use client";

import { Earth, Menu, Search, Settings } from "lucide-react";
import React, { FC } from "react";

type ReactSidebarProTypes = {
  isLeftBar?: boolean;
  setIsLeftBar?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
};

const Navbar: FC<ReactSidebarProTypes> = ({ setIsLeftBar }) => {
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
              <span>
                <Earth />
              </span>
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
