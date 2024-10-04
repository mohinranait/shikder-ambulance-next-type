import React from "react";
import { FaCar } from "react-icons/fa";
import { FaCableCar } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container ">
        <div className="grid grid-cols-1 pt-6 lg:grid-cols-5 lg:gap-6 items-center">
          <div className="flex lg:col-span-3">
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
          <div className="lg:col-span-2 p-8">
            <h2 className="text-4xl ">About me</h2>
            <p className="text-gray text-base font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              doloremque amet impedit quidem architecto cumque minus provident
              nesciunt ab aliquam.
            </p>
            <p className="text-gray text-base font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              doloremque amet impedit quidem architecto cumque minus provident
              nesciunt ab aliquam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
