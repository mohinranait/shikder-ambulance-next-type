"use client";
import { TMediaType } from "@/types/media.type";
import React, { createContext, useContext, useState } from "react";

type TImgProviderType = {
  selectedImage: TMediaType | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<TMediaType | null>>;
  imageModal: boolean;
  setImageModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ImageContext = createContext<TImgProviderType | null>(null);

const ImageProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedImage, setSelectedImage] = useState<TMediaType | null>(null);
  const [imageModal, setImageModal] = useState<boolean>(false);

  const imgObj: TImgProviderType = {
    selectedImage,
    setSelectedImage,
    imageModal,
    setImageModal,
  };

  return (
    <ImageContext.Provider value={imgObj}>{children}</ImageContext.Provider>
  );
};

export const useImg = () => {
  const img = useContext(ImageContext);
  if (!img) {
    throw new Error("Image must be Select");
  }
  return img;
};

export default ImageProvider;
