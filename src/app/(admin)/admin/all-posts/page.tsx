"use client";
import CustomTable from "@/common/CustomTable";
import useAxios from "@/hooks/useAxios";
import { TPostFormData } from "@/types/post.types";
import { Plus } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

type TQuery = {
  limit?: string;
  access?: string;
  search?: string;
};
const AllPosts = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [posts, setPosts] = useState<TPostFormData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<TPostFormData | null>(null);
  const axios = useAxios();
  const [search, setSearch] = useState<string>("");
  const columns = [
    {
      title: "Post",
      dataIndex: "action",
      key: "action",
      render: (_: string, record: TPostFormData) => {
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
              <p>{record?.seoTitle || record?.postTitle}</p>
              <div className="flex gap-2">
                <Link
                  href={`/admin/post?link=${record?.slug}`}
                  target="_blank"
                  className="text-primary text-xs hover:underline"
                >
                  Edit
                </Link>
                <Link
                  href={`/${record?.slug}`}
                  target="_blank"
                  className="text-primary text-xs hover:underline"
                >
                  View
                </Link>
                <span
                  onClick={() => {
                    onOpen();
                    setIsSelected(record);
                  }}
                  className="text-primary text-xs cursor-pointer hover:underline"
                >
                  Delete permanently
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
            {status === "Publish" ? (
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
      title: "Created Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt: string) => {
        return (
          <>
            <p className="text-nowrap text-text-gray">
              {moment(createdAt).format("MMM DD, YYYY")}
            </p>
            <p className="text-sm text-text-gray">
              {moment(createdAt).format("hh:mm A")}
            </p>
          </>
        );
      },
    },
  ];

  const handleCallAPI = async ({
    limit = "20",
    access = "admin",
    search = "",
  }: TQuery) => {
    const query: TQuery = {
      limit,
      access,
      search,
    };

    const queryString = new URLSearchParams(
      Object.fromEntries(Object.entries(query).filter(([_, v]) => v != null))
    ).toString();

    try {
      setIsLoading(true);
      const { data } = await axios.get(`/posts?${queryString}`);
      if (data?.success) {
        setPosts(data?.payload?.posts);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load posts.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleCallAPI({});
  }, [axios]);

  const handleSearch = () => {
    handleCallAPI({ search: search });
  };

  // handle delete post
  const handleDelete = async () => {
    try {
      setIsDeleteLoading(true);
      const { data } = await axios.delete(`/post/${isSelected?._id}`);
      if (data?.success) {
        setIsDeleteLoading(false);
        setPosts((prev) => prev?.filter((d) => d?._id !== isSelected?._id));
        onClose();
      } else {
        toast.error("Somthing wrong");
      }
    } catch (error) {
      toast.error("Somthing wrong");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full justify-between items-center py-3 px-3 rounded shadow-md bg-white">
        <p className="text-lg font-semibold text-slate-600">Posts</p>
      </div>
      <div className="flex justify-between items-center">
        <Link
          href={`/admin/post`}
          className="bg-primary flex items-center gap-1 text-sm text-white px-3 py-2 rounded"
        >
          <Plus />
          Add New Post
        </Link>
        <div>
          <input
            placeholder="Search..."
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            className="border-slate-300 border py-1 px-2 focus-visible:outline-none focus-visible:border-primary rounded-l"
          />
          <button
            type="button"
            onClick={() => handleSearch()}
            className="py-1 px-2 bg-primary text-white rounded-r"
          >
            Search
          </button>
        </div>
      </div>
      <div>
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <CustomTable dataSource={posts} columns={columns} />
        )}
      </div>

      <Modal
        hideCloseButton={true}
        backdrop="opaque"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="max-w-[350px] pt-10">
          {(onClose) => (
            <>
              <ModalBody>
                <p className="text-center text-base md:text-lg">
                  Are you sure want to delete this content?
                </p>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button
                  className="bg-red-100 text-red-500 rounded  "
                  variant="light"
                  onPress={onClose}
                >
                  No
                </Button>
                <Button
                  disabled={isDeleteLoading}
                  isLoading={isDeleteLoading}
                  onClick={handleDelete}
                  className="bg-primary text-white rounded"
                >
                  Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AllPosts;
