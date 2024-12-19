import React, { FC } from "react";
import { posts } from "@/config/constData";
import Image from "next/image";
import Link from "next/link";
import { TPostFormData } from "@/types/post.types";
import MainBody from "./MainBody";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";

type Props = {
  blog: TPostFormData;
};

const BlogView: FC<Props> = ({ blog }) => {
  return (
    <main className="mb-20">
      <section
        style={{
          backgroundImage: `url(${blog?.image?.featuresImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`${
            blog?.image?.featuresImage && "bg-slate-900 bg-opacity-75"
          } `}
        >
          <div className="container flex items-center  md:min-h-[calc(100vh-200px)] py-20 lg:px-32 xl:px-48 ">
            <div className="flex flex-col gap-3">
              <h1
                className={`text-center font-bold text-3xl md:text-4xl lg:text-5xl  mb-3 ${
                  blog?.image?.featuresImage ? "text-white" : "text-slate-950"
                } `}
              >
                {blog?.title}
              </h1>
              <p
                className={`lg:px-20 text-center  ${
                  blog?.image?.featuresImage
                    ? "text-slate-400"
                    : "text-slate-600"
                }`}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
                neque accusamus magni? Perferendis consectetur ipsa rerum, harum
                molestias ratione magni?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-3">
        <div className="container grid lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {(blog?.layouts?.isSidebar === "left" ||
            blog?.layouts?.isSidebar === "both") && <LeftSidebar />}
          <div
            className={` ${
              blog?.layouts?.isSidebar === "left" ||
              blog?.layouts?.isSidebar === "right"
                ? "lg:col-span-2 xl:col-span-3"
                : blog?.layouts?.isSidebar === "none"
                ? "lg:col-span-2 xl:col-span-4"
                : "lg:col-span-2 xl:col-span-2"
            }  bg-white p-5 rounded`}
          >
            <MainBody blog={blog} />
          </div>
          {(blog?.layouts?.isSidebar === "right" ||
            blog?.layouts?.isSidebar === "both") && <RightSidebar />}
        </div>
      </section>
    </main>
  );
};

export default BlogView;
