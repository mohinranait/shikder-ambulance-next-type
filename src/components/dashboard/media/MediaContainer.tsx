"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import ImageContainer from "./ImageContainer";

const MediaContainer = () => {
  return (
    <div>
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options">
          <Tab key="photos" title="Photos">
            <div className="flex w-full gap-5">
              <div className=" p-4 flex-grow bg-white">
                <ImageContainer />
              </div>
              <div className="w-[350px] bg-white rounded "></div>
            </div>
          </Tab>
          <Tab key="upload" title="Upload">
            <div>
              <div>Uplaod</div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default MediaContainer;
