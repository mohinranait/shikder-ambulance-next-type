"use client";
import useAxios from "@/hooks/useAxios";
import { TPostFormData } from "@/types/post.types";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllPosts = () => {
  const [posts, setPosts] = useState<TPostFormData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const axios = useAxios();
  console.log(posts);

  useEffect(() => {
    (async function () {
      try {
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
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full justify-between items-center py-3 px-3 rounded shadow-md bg-white">
        <p className="text-lg font-semibold text-slate-600">Posts</p>
      </div>
      <div className="flex justify-between items-center">
        <Link href={`/admin/post`}>
          <Button className="bg-primary text-white py-1 rounded ">
            Add New Post
          </Button>
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
        <div className="overflow-x-auto ">
          <table className=" w-full border border-slate-300 shadow-md   mx-auto border-gray-100  ">
            <thead>
              <tr className="bg-white text-slate-900">
                <th className="py-3 px-6 font-medium text-left ">Post</th>
                <th className="py-3 px-6 font-medium text-left ">Age</th>
                <th className="py-3 px-6 font-medium text-left ">Gender</th>
                <th className="py-3 px-6 font-medium   text-end">Address</th>
              </tr>
            </thead>
            <tbody>
              {posts?.map((post, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition duration-300"
                >
                  <td className="py-4 px-6 border-b border-slate-300">
                    <div>
                      <div></div>
                      <div>
                        <p>{post?.title}</p>
                        <div className="flex gap-2">
                          {" "}
                          <Link
                            href={`/admin/post?link=${post?.slug}`}
                            className="text-primary text-xs hover:underline "
                          >
                            Edit
                          </Link>
                          <Link
                            href={`/${post?.slug}`}
                            className="text-primary text-xs hover:underline "
                          >
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 border-b border-slate-300">19</td>
                  <td className="py-4 px-6 border-b border-slate-300">Male</td>
                  <td className="py-4 px-6 border-b border-slate-300 text-end">
                    Mirpur 15, Dhaka
                  </td>
                </tr>
              ))}

              {/* <tr className="hover:bg-gray-50 transition duration-300">
                <td className="py-4 px-6 border-b border-slate-300">Shiyam </td>
                <td className="py-4 px-6 border-b border-slate-300">19</td>
                <td className="py-4 px-6 border-b border-slate-300">Male</td>
                <td className="py-4 px-6 border-b border-slate-300 text-end">
                  Mirpur 15, Dhaka
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
