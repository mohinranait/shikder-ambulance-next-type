import BlogView from "@/components/pages/blogs/BlogView";
import { BASE_URL } from "@/config/accessEnv";
import { TPostFormData } from "@/types/post.types";

import React from "react";

const BlogDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const res = await fetch(`${BASE_URL}/post/${params?.slug}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return <BlogView blog={data?.payload?.post} />;
};

export default BlogDetailsPage;
