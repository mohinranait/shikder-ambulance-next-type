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
                    <b>Oxygen: </b>Oxygen therapy is the use of oxygen to treat various medical conditions, particularly those involving the respiratory system. It involves supplying additional oxygen to individuals whose bodies are unable to get sufficient oxygen naturally.
                    </p>
                  </div>
                  <div className="mr-8 pt-8">
                    <FaCableCar className="text-primary" size={50} />
                    <p className="text-gray mt-5">
                    <b>wheelchair: </b>A wheelchair is a mobility device designed to assist individuals who have difficulty walking due to illness, injury, or disability. There are two main types: manual wheelchairs that require physical effort to move, and electric wheelchairs that are powered by motors for easier movement.
                    </p>
                  </div>
                </div>
                <div className=" w-full  ">
                  <div className="ml-8 pb-8 border-b border-slate-200">
                    <FaCableCar className="text-primary" size={50} />
                    <p className="text-gray mt-5">
                    <b>Stretcher: </b>A stretcher is a device used to carry patients who cannot move on their own, especially in emergencies. It provides a safe and stable way to transport patients, particularly those with injuries or who need medical care during transport.
                    </p>
                  </div>
                  <div className="ml-8 mt-8">
                    <FaCableCar className="text-primary" size={50} />
                    <p className="text-gray mt-5">
                    <b>Response Time:</b> The faster the ambulance can reach you, the better. Look for services that promise quick response times, and check reviews for reliability.
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
