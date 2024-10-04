import RatingComponent from "@/common/RatingComponent,";
import { Post } from "@/types/dataType";

import { Clock, DoorOpen, Heart, Map, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  post: Post;
}

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <div className="dark:bg-black bg-white relative">
      <div className="absolute top-2 z-10 flex gap-1 items-center left-2 bg-black px-2 py-1 text-white rounded-2xl ">
        Feature
      </div>
      <div className="absolute top-2 z-10 flex gap-1 items-center right-2 bg-black px-2 py-1 text-white rounded-2xl bg-opacity-50">
        <Heart size={20} /> 45
      </div>

      <div className="mb-3 overflow-hidden">
        <Image
          src={post?.image}
          width={400}
          height={200}
          alt={post?.title}
          className="w-full hover:scale-125 transition duration-300 hover:rotate-1"
        />
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
      <div className="px-3">
        <p className="text-xl text-gray-700 font-medium">{post?.title}</p>
        <div className="flex gap-2 items-center text-sm text-gray-400">
          <RatingComponent rating={post?.rating} />
          51 Reivews
        </div>
      </div>
      <ul className="flex flex-col gap-2 px-3 pb-3 mt-3">
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
      </ul>
    </div>
  );
};

export default PostCard;
