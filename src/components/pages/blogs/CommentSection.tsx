import React, { FC } from "react";
import CommentForm from "./CommentForm";
import ShowAllComments from "./ShowAllComments";
import { TPostFormData } from "@/types/post.types";
import { getAllCommentByPostId } from "@/actions/commentApi";
type TCommentType = {
  _id: string;
  autor?: string;
  content: string;
  name: string;
  star: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type Props = {
  blog: TPostFormData;
};

const CommentSection: FC<Props> = async ({ blog }) => {
  if (!blog?._id) return;
  const data = await getAllCommentByPostId(blog?._id);

  const comments: TCommentType[] = data?.payload?.comments;
  return (
    <div>
      <CommentForm blog={blog} />
      {comments?.length > 0 && <ShowAllComments comments={comments} />}
    </div>
  );
};

export default CommentSection;
