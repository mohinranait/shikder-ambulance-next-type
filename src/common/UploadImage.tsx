"use client";
import { TMediaType } from "@/types/media.type";
import React, { FC, useState } from "react";
import toast from "react-hot-toast";
import { IoCloudUploadOutline } from "react-icons/io5";
import { uploadToCloud } from "@/actions/mediaApi";

type Props = {
  setAllImages: React.Dispatch<React.SetStateAction<TMediaType[]>>;
  setParentTab: React.Dispatch<React.SetStateAction<"photos" | "upload">>;
};
const UploadImage: FC<Props> = ({ setAllImages, setParentTab }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fl = e.target.files[0];

      const formData = new FormData();
      formData.append("file", fl);

      try {
        setIsLoading(true);
        const data = await uploadToCloud(formData);
        if (data?.success) {
          const file = data?.payload?.file;
          setAllImages((prev) => [file, ...prev]);
          toast.success("Uploaded");
          setParentTab("photos");
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);

        toast.error("Somthing wrong");
        setIsLoading(false);
      }
    }
  };

  return (
    <label
      htmlFor="upload"
      className="inline-flex cursor-pointer w-full border bg-white border-slate-300 rounded-md"
    >
      <div className="w-full h-[120px] flex items-center justify-center">
        <div className="flex flex-col gap-2 items-center">
          {isLoading ? (
            <>Uploading...</>
          ) : (
            <>
              <IoCloudUploadOutline size={30} />
              <p className="text-sm">Upload Image</p>
            </>
          )}
        </div>
      </div>
      <input
        type="file"
        id="upload"
        hidden
        onChange={handleFileChange}
        disabled={isLoading}
      />
    </label>
  );
};

export default UploadImage;
