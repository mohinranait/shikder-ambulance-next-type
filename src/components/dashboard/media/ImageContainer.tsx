"use client";
import React from "react";
import ImageCard from "./ImageCard";
import { Tabs, Tab } from "@nextui-org/react";

const ImageContainer = () => {
  return (
    <div>
      <Tabs aria-label="Options">
        <Tab key="Larges" title="Larges">
          <div className="grid  rounded-md  gap-3 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 ">
            <ImageCard />
            <ImageCard />
            <ImageCard selected={true} />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </div>
        </Tab>
        <Tab key="Small" title="Small">
          <div className="grid  rounded-md  gap-3 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 ">
            <ImageCard />
            <ImageCard selected={true} />
            <ImageCard />
            <ImageCard />

            <ImageCard />
            <ImageCard />
            <ImageCard />
          </div>
        </Tab>
        <Tab key="Medium" title="Medium">
          <div className="grid  rounded-md  gap-3 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 ">
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard selected={true} />
            <ImageCard />

            <ImageCard />
            <ImageCard />
            <ImageCard />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ImageContainer;
