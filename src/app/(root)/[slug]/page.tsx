import BlogView from "@/components/pages/blogs/BlogView";
import { BASE_URL } from "@/config/accessEnv";
import { TPostFormData } from "@/types/post.types";

import React from "react";

const BlogDetailsPage = async ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);

  const res = await fetch(`${BASE_URL}/post/${params?.slug}`);
  const data = await res.json();

  const obj: TPostFormData = {
    _id: "",
    title: "First post is Development Test purpse",
    author: "675ad6ce82b3879b95c89c8d",
    slug: "first-post-is-developments-test-purpse",
    contactNumber: "",
    content: "",
    image: {
      featuresImage:
        "http://res.cloudinary.com/dm9s5d3xk/image/upload/v1734083447/shikder/weh6haw7bwe7rofy9ofd.webp",
      thumbnail: "",
    },
    layouts: {
      banner: true,
      sidebar: "posts",
      isSidebar: "right",
      comments: true,
    },
    seoTitle: "Seto ",
    status: "Publish",
    seoDescription: "desc",
    seoKeyword: [""],
  };
  return <BlogView blog={data?.payload?.post} />;
};

export default BlogDetailsPage;
