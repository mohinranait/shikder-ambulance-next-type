"use client";
import Navbar from "@/components/dashboard/Shared/Navbar";
import ReactSidebarPro from "@/components/dashboard/Shared/ReactSidebarPro";
import React, { FC, useState } from "react";

type DashboardLayoutTypes = {
  children: React.ReactNode;
};

const DashboardLayout: FC<DashboardLayoutTypes> = ({ children }) => {
  const [isLeftBar, setIsLeftBar] = useState<boolean>(false);

  return (
    <div className="relative flex min-h-screen overflow-x-auto">
      <ReactSidebarPro isLeftBar={isLeftBar} setIsLeftBar={setIsLeftBar} />
      <div className="flex w-[calc(100vw-250px)] flex-grow flex-col gap-4">
        <Navbar isLeftBar={isLeftBar} setIsLeftBar={setIsLeftBar} />

        <div className="px-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
