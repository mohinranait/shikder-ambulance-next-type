"use client";
import CustomTable from "@/common/CustomTable";
import useAxios from "@/hooks/useAxios";
import { TPostFormData } from "@/types/post.types";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllPosts = () => {
  const [posts, setPosts] = useState<TPostFormData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const axios = useAxios();
  console.log(posts);

  const columns = [
    {
      title: "Post",
      dataIndex: "action",
      key: "action",
      render: (_: string, record: any) => {
        return (
          <div className="flex gap-2">
            <div>
              <Image
                src={record?.image?.featuresImage || "/placeholder.jpg"}
                width={50}
                height={50}
                alt="image"
              />
            </div>
            <div>
              <p>{record?.title}</p>
              <div className="flex gap-2">
                {" "}
                <Link
                  href={`/admin/post?link=${record?.slug}`}
                  className="text-primary text-xs hover:underline "
                >
                  Edit
                </Link>
                <Link
                  href={`/${record?.slug}`}
                  className="text-primary text-xs hover:underline "
                >
                  View
                </Link>
                <span className="text-primary text-xs cursor-pointer hover:underline ">
                  Delete permaently
                </span>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        return (
          <div className="flex gap-[6px]">
            {status == "Publish" ? (
              <span className="rounded bg-green-600 inline-flex text-xs px-2 py-[2px] text-white">
                {status}
              </span>
            ) : (
              <span className="rounded bg-red-600 inline-flex text-xs px-2 py-[2px] text-white">
                {status}
              </span>
            )}
          </div>
        );
      },
    },
    {
      title: "Transcribed By",
      dataIndex: "creator",
      key: "creator",
      render: (creator: string) => {
        return (
          <div className="flex gap-[6px]">
            <Image
              src={"/assests/avater/avater1.png"}
              className="mt-[4px] h-[16px] w-[16px] rounded-full ring-1 ring-primary"
              alt="avater"
              width={20}
              height={20}
            />
            <div>
              <p className="text-text-gray">{creator}</p>
              <p className="text-[11px] text-text-gray">CEO</p>
            </div>
          </div>
        );
      },
    },
    {
      title: "Transcribed Date",
      dataIndex: "date",
      key: "date",
      render: (date: string) => {
        return (
          <>
            <p className="text-nowrap text-text-gray">{date}</p>
            <p className="text-sm text-text-gray">11:00 AM</p>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/posts?access=all`);
        if (data?.success) {
          setPosts(data?.payload?.posts);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);

        // toast.error(error);
      }
    })();
  }, []);

  if (isLoading) {
    return "Loading...";
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full justify-between items-center py-3 px-3 rounded shadow-md bg-white">
        <p className="text-lg font-semibold text-slate-600">Posts</p>
      </div>
      <div className="flex justify-between items-center">
        <Link
          href={`/admin/post`}
          className="bg-primary text-white px-3 py-2 rounded "
        >
          Add New Post
        </Link>
        <div>
          <input
            placeholder="Search..."
            type="search"
            className="border-slate-300 border py-1 px-2 focus-visible:outline-none focus-visible:border-primary rounded-md"
          />
        </div>
      </div>
      <div>
        <CustomTable dataSource={posts} columns={columns} />
      </div>
    </div>
  );
};

export default AllPosts;
