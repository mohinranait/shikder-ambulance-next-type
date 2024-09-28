import { Button } from "@nextui-org/button";
import React from "react";

const BannerSection = () => {
  return (
    <section
      className="bg-no-repeat bg-cover bg-right-bottom relative "
      // style={{ background: `url('/images/background/hero.png')` }}
    >
      {/* <span className="flex w-[300px] top-4 h-[200px] bg-primary bg-opacity-80 backdrop-blur-2xl absolute"></span> */}
      {/* <span className="flex w-[300px] bottom-4 right-10 h-[200px] bg-opacity-80 bg-primary backdrop-blur-2xl absolute"></span> */}
      <span className="flex w-[300px] bg-primary h-[200px] top-1/2 left-1/2 bg-opacity-35 -translate-y-1/2 -translate-x-1/2 backdrop-blur-2xl absolute"></span>
      <span className="flex w-[300px] bg-secondary h-[200px] top-1/2 left-1/2 mt-8 bg-opacity-20 -translate-y-1/2 translate-x-1/2 backdrop-blur-2xl absolute"></span>
      <div className=" bg-opacity-50 backdrop-blur-[100px]">
        <div className="container  min-h-[500px] flex items-center justify-center">
          <div className="">
            <h1 className="text-6xl text-black font-semibold text-center">
              Shikder <span className="text-primary">Ambulance</span> <br />{" "}
              Service
            </h1>
            <p className="text-base text-black text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Rerum expedita molestiae consequuntur ullam animi dolore.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <Button>Call Now</Button>
              <Button>Explore</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
