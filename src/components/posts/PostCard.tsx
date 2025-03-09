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
      <div className="mb-3 h-[200px] overflow-hidden">
        <Link href={`${post.slug}`}>
          <Image
            src={post?.image?.featuresImage || "/placeholder.jpg"}
            width={400}
            height={200}
            alt={post?.seoTitle || post?.postTitle}
            className="w-full hover:scale-125 object-cover transition duration-300 hover:rotate-1"
          />
        </Link>
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

    </article>
  );
};

export default PostCard;
