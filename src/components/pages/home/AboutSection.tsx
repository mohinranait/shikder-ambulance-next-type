import { Button } from "@nextui-org/button";
import React from "react";
import { FaCar } from "react-icons/fa";
import { FaCableCar } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <section className="py-10">
      <div className=" overflow-hidden relative ">
        {/* <span className="bg-primary w-80 h-80 bg-opacity-15 backdrop-blur-3xl rotate-45 absolute bottom-0 left-0 "></span> */}
        <span className="flex w-[300px] bg-primary-mute h-[100px] top-1/2 left-0 bg-opacity-10 -translate-y-1/2  backdrop-blur-2xl absolute"></span>
        <span className="flex w-[300px] bg-secondary h-[100px] top-1/2 left-0 mt-8 bg-opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 backdrop-blur-2xl absolute"></span>
        <div className="relative bg-opacity-50 backdrop-blur-[100px] pb-20">
          <div className="container ">
            <div className="grid grid-cols-1 pt-6 lg:grid-cols-5 lg:gap-6 items-center">
              <div className="order-2 lg:order-1 flex lg:col-span-3">
                <div className=" w-full border-r border-slate-200  pt-16">
                  <div className="mr-8 border-b pb-8 border-slate-200">
                    {/* <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center bg-primary-mute"> */}
                    <FaCar className="text-primary" size={50} />
                    {/* </div> */}
                    <p className="text-gray mt-5">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Adipisci facilis ipsam, quod autem voluptatibus suscipit
                      totam. Deleniti veniam fugiat a?
                    </p>
                  </div>
                  <div className="mr-8 pt-8">
                    <FaCableCar className="text-primary" size={50} />
                    <p className="text-gray mt-5">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Adipisci facilis ipsam, quod autem voluptatibus suscipit
                      totam. Deleniti veniam fugiat a?
                    </p>
                  </div>
                </div>
                <div className=" w-full  ">
                  <div className="ml-8 pb-8 border-b border-slate-200">
                    <FaCableCar className="text-primary" size={50} />
                    <p className="text-gray mt-5">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Adipisci facilis ipsam, quod autem voluptatibus suscipit
                      totam. Deleniti veniam fugiat a?
                    </p>
                  </div>
                  <div className="ml-8 mt-8">
                    <FaCableCar className="text-primary" size={50} />
                    <p className="text-gray mt-5">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Adipisci facilis ipsam, quod autem voluptatibus suscipit
                      totam. Deleniti veniam fugiat a?
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 lg:col-span-2 p-8">
                <h2 className="text-4xl font-bold mb-4 ">About me</h2>
                <p className="text-gray text-base font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique doloremque amet impedit quidem architecto cumque
                  minus provident nesciunt ab aliquam.
                </p>
                <p className="text-gray text-base font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique doloremque amet impedit quidem architecto cumque
                  minus provident nesciunt ab aliquam.
                </p>
                <div className="flex items-center  gap-4 mt-4">
                  <Button className="bg-primary text-white">Call Now</Button>
                  <Button className="bg-secondary text-white">Explore</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
