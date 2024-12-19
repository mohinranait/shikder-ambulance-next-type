import React from "react";
import { posts } from "@/config/constData";
import Image from "next/image";
import Link from "next/link";

const LeftSidebar = () => {
  return (
    <div className="col-span-1 bg-white rounded p-2">
      <ul className="flex flex-col gap-3">
        <p className="text-base font-semibold text-slate-950 mt-2">Trends</p>
        {posts?.map((item) => (
          <li key={item._id}>
            <Link href={`${item?._id}`} className="rounded flex gap-3  ">
              <div className="w-[90px]">
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt="image"
                  className="object-cover"
                />
              </div>
              <div className="p-2 pl-0">
                <p className="text-sm font-medium text-slate-700">
                  {item.title}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
