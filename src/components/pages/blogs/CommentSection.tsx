import React from "react";
import CommentForm from "./CommentForm";
import ShowAllComments from "./ShowAllComments";
import { BASE_URL } from "@/config/accessEnv";
type TCommentType = {
  _id: string;
  autor?: string;
  content: string;
  star: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const CommentSection = async () => {
  const res = await fetch(`${BASE_URL}/comments`, {
    cache: "no-store",
  });
  const data = await res.json();
  const comments: TCommentType[] = data?.payload?.comments;
  return (
    <div>
      <CommentForm />
      <ShowAllComments comments={comments} />
    </div>
  );
};

export default CommentSection;
