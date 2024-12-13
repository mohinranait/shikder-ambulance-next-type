"use client";
import React, { FC } from "react";
import ImageCard from "./ImageCard";
import { Tabs, Tab } from "@nextui-org/react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { TMediaType } from "@/types/media.type";

type Props = {
  allImages: TMediaType[];
  setSelectedImg: React.Dispatch<React.SetStateAction<TMediaType | null>>;
};
const ImageContainer: FC<Props> = ({ allImages, setSelectedImg }) => {
  return (
    <div>
      <Tabs aria-label="Options">
        <Tab key="Larges" title="Larges">
          <div className="grid  rounded-md  gap-3 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-7 ">
            {allImages?.map((img, index) => (
              <ImageCard
                key={index}
                img={img}
                setSelectedImg={setSelectedImg}
              />
            ))}
          </div>
        </Tab>
        <Tab key="Small" title="Small">
          <div className="grid  rounded-md  gap-3 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 2xl:grid-cols-7 ">
            {/* <ImageCard selected={true} /> */}
            {allImages?.map((img, index) => (
              <ImageCard
                key={index}
                img={img}
                setSelectedImg={setSelectedImg}
              />
            ))}
          </div>
        </Tab>
        <Tab key="Medium" title="Medium">
          <div className="grid  rounded-md  gap-3 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 2xl:grid-cols-7 ">
            {allImages?.map((img, index) => (
              <ImageCard
                key={index}
                img={img}
                setSelectedImg={setSelectedImg}
              />
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ImageContainer;
