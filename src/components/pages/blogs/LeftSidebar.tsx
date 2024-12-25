import React from "react";
import { posts } from "@/config/constData";
import Image from "next/image";
import Link from "next/link";
import AsidePosts from "./AsidePosts";

const LeftSidebar = () => {
  return (
    <aside className="col-span-1 bg-white rounded p-2">
      <AsidePosts />
    </aside>
  );
};

export default LeftSidebar;
