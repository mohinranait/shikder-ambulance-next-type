"use client";
import React, { FC } from "react";
import ImageCard from "./ImageCard";
import { TMediaType } from "@/types/media.type";

type Props = {
  allImages: TMediaType[];
  setSelectedImg: React.Dispatch<React.SetStateAction<TMediaType | null>>;
};
const ImageContainer: FC<Props> = ({ allImages, setSelectedImg }) => {
  return (
    <div>
      <div className="grid  rounded-md  gap-3 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-7 ">
        {allImages?.map((img, index) => (
          <ImageCard key={index} img={img} setSelectedImg={setSelectedImg} />
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
