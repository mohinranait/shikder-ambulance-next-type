import React, { FC } from "react";
import CommentForm from "./CommentForm";
import ShowAllComments from "./ShowAllComments";
import { BASE_URL } from "@/config/accessEnv";
import { TPostFormData } from "@/types/post.types";
type TCommentType = {
  _id: string;
  autor?: string;
  content: string;
  star: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type Props = {
  blog: TPostFormData;
};

const CommentSection: FC<Props> = async ({ blog }) => {
  const res = await fetch(`${BASE_URL}/comments?postId=${blog?._id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const comments: TCommentType[] = data?.payload?.comments;
  return (
    <div>
      <CommentForm blog={blog} />
      {comments?.length > 0 && <ShowAllComments comments={comments} />}
    </div>
  );
};

export default CommentSection;
