import { Button } from "@nextui-org/button";
import React from "react";

const BannerSection = () => {
  return (
    <section
      className="bg-no-repeat bg-cover bg-right-bottom overflow-hidden relative "
      // style={{ background: `url('/images/background/hero.png')` }}
    >
      {/* <span className="flex w-[300px] top-4 h-[200px] bg-primary bg-opacity-80 backdrop-blur-2xl absolute"></span> */}
      {/* <span className="flex w-[300px] bottom-4 right-10 h-[200px] bg-opacity-80 bg-primary backdrop-blur-2xl absolute"></span> */}
      <span className="flex w-[300px] bg-primary-mute h-[200px] top-1/2 left-1/2 bg-opacity-10 -translate-y-1/2 -translate-x-1/2 backdrop-blur-2xl absolute"></span>
      <span className="flex w-[300px] bg-secondary h-[200px] top-1/2 left-1/2 mt-8 bg-opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 backdrop-blur-2xl absolute"></span>
      <div className=" bg-opacity-50 backdrop-blur-[100px]">
        <div className="container py-10 xl:min-h-[500px] 2xl:min-h-[600px] flex items-center justify-center">
          <div className="">
            <h1 className="text-3xl sm:text-4xl dark:text-white md:text-6xl text-black font-semibold text-center">
              Shikder{" "}
              <span className=" font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                Ambulance
              </span>{" "}
              <br /> Service
            </h1>
            <p className="text-base text-black text-center dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Rerum expedita molestiae consequuntur ullam animi dolore.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <Button className="bg-primary text-white">Call Now</Button>
              <Button className="bg-secondary text-white">Explore</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
