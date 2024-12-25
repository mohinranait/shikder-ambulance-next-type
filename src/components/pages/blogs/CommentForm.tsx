"use client";
import { instance } from "@/hooks/useAxios";
import { useAuth } from "@/providers/AuthProvider";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

const CommentForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user } = useAuth();
  const [isError, setIsError] = useState<string>("");
  const [form, setForm] = useState({
    content: "",
    star: 5,
  });

  // handle submit comment
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsError("");
    if (!form?.content) {
      setIsError(`Empty field can't submit`);
      return;
    }

    try {
      setIsLoading(true);
      const { data } = await instance.post(
        `/comment/${user?._id ? user?._id : "not-auth"}`,
        form
      );
      if (data?.success) {
        toast.success("Submited successfully");
        setIsError("");
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="p-5 bg-white rounded flex gap-2">
      <div>
        <div className="w-[50px]">
          <Image
            src={"/images/avater/profile1.png"}
            width={50}
            height={50}
            alt="avater"
            className="w-10 h-10 rounded-full ring-1 ring-primary ring-offset-2"
          />
        </div>
      </div>
      <div className="w-full">
        <div>
          <textarea
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                content: e?.target?.value,
              }))
            }
            name=""
            id=""
            rows={3}
            value={form?.content}
            placeholder="Write your message..."
            className={` ${
              isError ? "border-red-500" : "border-slate-300"
            }  border-1 m-0 text-slate-800 placeholder:text-slate-200 p-0 focus-visible:outline-offset-0  bg-transparent  w-full focus-visible:outline-primary py-2 rounded px-3 `}
          ></textarea>
          {isError && <p className="text-red-500 text-xs ">{isError}</p>}
        </div>
        <div>
          <Button
            isLoading={isLoading}
            type="submit"
            className="bg-primary text-white"
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
