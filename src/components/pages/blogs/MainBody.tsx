"use client";
import { TPostFormData } from "@/types/post.types";
import Image from "next/image";
import React, { FC } from "react";

type Props = {
  blog: TPostFormData;
};
const MainBody: FC<Props> = ({ blog }) => {
  return (
    <div className="bg-white blog-post-preview p-5 rounded">
      {!blog?.content && (
        <h2 className="text-2xl mb-2 font-bold text-slate-900">
          Shikder ambulance service
        </h2>
      )}
      {/* <div>
        <Image
          src={blog?.image?.featuresImage || ""}
          width={600}
          height={400}
          alt={blog?.postTitle}
          className="w-full h-full"
        />
      </div> */}
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
      />
    </div>
  );
};

export default MainBody;
