import React, { FC } from "react";
import { posts } from "@/config/constData";
import Image from "next/image";
import Link from "next/link";
import { TPostFormData } from "@/types/post.types";
import MainBody from "./MainBody";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";
import CommentSection from "./CommentSection";

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
                {blog?.shortDescription}
              </p>
              {blog?.contactNumber && (
                <div className="flex justify-center">
                  <Link
                    href={`tel:${blog?.contactNumber}`}
                    className="py-[10px] px-4 rounded-[100px] bg-primary text-white inline-block"
                  >
                    Call Ambulance
                  </Link>
                </div>
              )}
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
            } flex flex-col gap-3 `}
          >
            <MainBody blog={blog} />
            <CommentSection />
          </div>
          {(blog?.layouts?.isSidebar === "right" ||
            blog?.layouts?.isSidebar === "both") && <RightSidebar />}
        </div>
      </section>
    </main>
  );
};

export default BlogView;
