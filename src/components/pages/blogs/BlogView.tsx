import React, { FC } from "react";
import { posts } from "@/config/constData";
import Image from "next/image";
import Link from "next/link";
import { TPostFormData } from "@/types/post.types";

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
          <div className="lg:col-span-2 xl:col-span-3 bg-white p-5 rounded">
            <h2 className="text-2xl mb-2 font-bold text-slate-900">
              Shikder ambulance
            </h2>
            {blog?.content}
          </div>
          <div className="col-span-1 bg-white rounded p-2">
            <ul className="flex flex-col gap-3">
              <p className="text-base font-semibold text-slate-950 mt-2">
                Trends
              </p>
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
        </div>
      </section>
    </main>
  );
};

export default BlogView;
