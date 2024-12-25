import { getSinglePostBySlug } from "@/actions/postApi";
import BlogView from "@/components/pages/blogs/BlogView";
import { TPostFormData } from "@/types/post.types";
import { Metadata, ResolvingMetadata } from "next";

import React from "react";
type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await getSinglePostBySlug(params?.slug);
  const post: TPostFormData = data?.payload?.post;

  const previousImages = post?.image?.featuresImage;

  return {
    title: post?.seoTitle || post?.title,
    description: post?.seoDescription,
    keywords: post?.seoKeyword,

    openGraph: {
      url: `${process.env.NEXT_PUBLIC_URL}/${post?.slug}`,
      images: [previousImages || ""],
    },
  };
}

const BlogDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getSinglePostBySlug(params?.slug);
  const post = data?.payload?.post;

  return <BlogView blog={post} />;
};

export default BlogDetailsPage;
