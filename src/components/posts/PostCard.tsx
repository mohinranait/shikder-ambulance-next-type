import RatingComponent from "@/common/RatingComponent,";
import { TPostFormData } from "@/types/post.types";
// import { Post } from "@/types/dataType";

import { Clock, DoorOpen, Heart, Map, Phone } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  post: TPostFormData;
}

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <article className="dark:bg-black min-h-[300px] bg-white relative">
      <div className="absolute top-2 z-10 flex gap-1 items-center left-2 bg-black px-2 py-1 text-white rounded-2xl ">
        Feature
      </div>
      <div className="absolute top-2 z-10 flex gap-1 items-center right-2 bg-black px-2 py-1 text-white rounded-2xl bg-opacity-50">
        <Heart size={20} /> 45
      </div>

      <div className="mb-3 h-[200px] overflow-hidden">
        <Link href={`${post.slug}`}>
          <Image
            src={post?.image?.featuresImage || ""}
            width={400}
            height={200}
            alt={post?.seoTitle || post?.postTitle}
            className="w-full hover:scale-125 transition duration-300 hover:rotate-1"
          />
        </Link>
      </div>
      <div className="px-4 flex justify-end gap-2 -mt-7 relative ">
        <div className="relative">
          <Image
            src={"/images/avater/profile1.png"}
            width={40}
            height={40}
            className="bg-white ring-2 ring-primary ring-offset-2 w-8 h-8 rounded-full "
            alt="Avater"
          />
          <span className="w-3 h-3 ring-2  rounded-full bg-green-600 absolute top-0 -right-1 ring-white"></span>
        </div>
      </div>
      <div className="px-3 pb-3">
        <p className="text-xl text-gray-700 font-medium">
          {post?.seoTitle || post?.postTitle}
        </p>
        <p className="text-sm text-gray-100 font-medium">
          {moment(post?.createdAt).format("MMM DD, YYYY")}
        </p>
        <p className="text-sm text-gray-300">
          {post?.shortDescription?.slice(0, 100)}
        </p>
        {/* <div className="flex gap-2 items-center text-sm text-gray-400">
          <RatingComponent rating={4} />
          51 Reivews
        </div> */}
      </div>
      {/* <ul className="flex flex-col gap-2 px-3 pb-3 mt-3">
        <li className="flex gap-2 items-center text-sm text-gray-500">
          {" "}
          <Map className="text-primary" size={15} />{" "}
          <span>Dhaka, Bangladesh</span>{" "}
        </li>
        <li className="flex gap-2 items-center text-sm text-gray-500">
          {" "}
          <Clock className="text-primary" size={15} /> <span>May 4, 2024</span>{" "}
        </li>
        <li className="flex gap-2 items-center text-sm text-gray-500">
          {" "}
          <Phone className="text-primary" size={15} />{" "}
          <span>Call: 017566-5454</span>{" "}
        </li>
        <li className="flex gap-2 items-center text-sm text-gray-500">
          {" "}
          <DoorOpen className="text-primary" size={15} />{" "}
          <span>Open: 7:00 AM - 4:00 PM</span>{" "}
        </li>
      </ul> */}
    </article>
  );
};

export default PostCard;
