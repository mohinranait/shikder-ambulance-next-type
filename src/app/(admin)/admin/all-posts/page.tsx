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
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { deletePostById, getPosts } from "@/actions/postApi";

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
  const [searchTerm, setSearchTerm] = useState<string>("");

  const columns = [
    {
      title: "Post Name",
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
              <p>
                <Link href={`/${record?.slug}`} target="_blank">
                  {record?.postTitle}
                </Link>
              </p>
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
                  Delete
                </span>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      title: "Title",
      dataIndex: "seoTitle",
      key: "seoTitle",
      render: (seoTitle: string) => {
        return (
          <p
            title={seoTitle}
            className="truncate max-w-[250px] overflow-hidden"
          >
            {seoTitle}
          </p>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        return (
          <span
            className={`rounded text-xs px-2 py-[2px] text-white ${
              status === "Publish" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {status}
          </span>
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
    const query: TQuery = { limit, access, search };

    try {
      const data = await getPosts(query);
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

  // Debounced search
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      handleCallAPI({ search: searchTerm });
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [searchTerm]);

  useEffect(() => {
    setIsLoading(true);
    handleCallAPI({});
  }, []);

  // Handle delete post
  const handleDelete = async () => {
    try {
      if (!isSelected?._id) {
        return;
      }
      setIsDeleteLoading(true);
      const data = await deletePostById(isSelected?._id);
      if (data?.success) {
        setIsDeleteLoading(false);
        setPosts((prev) => prev?.filter((d) => d?._id !== isSelected?._id));
        onClose();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col gap-4">
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-slate-300 border py-1 px-2 focus-visible:outline-none focus-visible:border-primary rounded-l"
          />
        </div>
      </div>
      <div>
        {isLoading ? (
          <p>Loading...</p>
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
                  Are you sure you want to delete this content?
                </p>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button
                  className="bg-red-100 text-red-500 rounded"
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
