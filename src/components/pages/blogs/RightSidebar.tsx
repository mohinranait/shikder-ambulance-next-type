import { posts } from "@/config/constData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AsidePosts from "./AsidePosts";

const RightSidebar = () => {
  return (
    <aside className="col-span-1 bg-white rounded p-2">
      <AsidePosts />
    </aside>
  );
};

export default RightSidebar;
