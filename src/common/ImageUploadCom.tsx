"use client";

import React, { FC, useEffect } from "react";

import { IoCloudUploadOutline } from "react-icons/io5";
import { useImg } from "@/providers/ImageProvider";

type Props = {
  url: string;
  cb: (e: string) => void;
};
const ImageUploadCom: FC<Props> = ({ url, cb }) => {
  const { imageModal, selectedImage, setSelectedImage, setImageModal } =
    useImg();

  useEffect(() => {
    if (selectedImage) {
      cb(selectedImage?.fileUrl);
      setImageModal(false);
      setSelectedImage(null);
    }
  }, [selectedImage]);
  return (
    <div
      onClick={() => setImageModal(true)}
      className="inline-flex cursor-pointer w-full border bg-white border-slate-300 rounded-md"
    >
      <div
        style={{
          backgroundImage: `url(${url})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-[120px] flex items-center justify-center"
      >
        <div className="flex flex-col gap-2 items-center">
          <>
            <IoCloudUploadOutline size={30} />
            <p className="text-sm">Feature Image</p>
          </>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadCom;
