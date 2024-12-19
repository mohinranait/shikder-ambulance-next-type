"use client";
import Navbar from "@/components/dashboard/Shared/Navbar";
import ReactSidebarPro from "@/components/dashboard/Shared/ReactSidebarPro";
import React, { FC, Suspense, useState } from "react";
import "@mdxeditor/editor/style.css";
import withAuth from "@/hooks/withAuth";

type DashboardLayoutTypes = {
  children: React.ReactNode;
};

const DashboardLayout: FC<DashboardLayoutTypes> = ({ children }) => {
  const [isLeftBar, setIsLeftBar] = useState<boolean>(false);

  return (
    <Suspense fallback={<div>Suspense</div>}>
      <div className="relative bg-theme flex min-h-screen ">
        <ReactSidebarPro isLeftBar={isLeftBar} setIsLeftBar={setIsLeftBar} />
        <div className="flex w-[calc(100vw-250px)] flex-grow flex-col gap-4">
          <Navbar isLeftBar={isLeftBar} setIsLeftBar={setIsLeftBar} />

          <div className="px-6 mb-10">{children}</div>
        </div>
      </div>
    </Suspense>
  );
};

export default withAuth(DashboardLayout);
