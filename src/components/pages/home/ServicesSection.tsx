import React from "react";
import { FaCarSide } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section className="py-10">
      <div className="container  ">
        <div className="mb-4 lg:w-1/2 mx-auto ">
          <h2 className="text-3xl font-semibold text-center">Services</h2>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
            dolores?
          </p>
        </div>

        <div className="grid pt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 services">
          <div className=" flex flex-col gap-2 shadow p-4 service_card bg-white rounded-[18px]">
            <div className="rounded-full w-24 h-24 flex items-center justify-center bg-slate-100">
              <FaCarSide size={35} />
            </div>
            <p className="text-xl font-semibold text-black">Ac Ambulance</p>
            <p className="text-gray text-base font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              beatae animi unde accusamus est. Obcaecati asperiores illo nihil
              harum ipsum.
            </p>
          </div>
          <div className=" flex flex-col gap-2 shadow p-4 service_card bg-white rounded-[18px]">
            <div className="rounded-full w-24 h-24 flex items-center justify-center bg-slate-100">
              <FaCarSide size={35} />
            </div>
            <p className="text-xl font-semibold text-black">Ac Ambulance</p>
            <p className="text-gray text-base font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              beatae animi unde accusamus est. Obcaecati asperiores illo nihil
              harum ipsum.
            </p>
          </div>
          <div className=" flex flex-col gap-2 shadow p-4 service_card bg-white rounded-[18px]">
            <div className="rounded-full w-24 h-24 flex items-center justify-center bg-slate-100">
              <FaCarSide size={35} />
            </div>
            <p className="text-xl font-semibold text-black">Ac Ambulance</p>
            <p className="text-gray text-base font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              beatae animi unde accusamus est. Obcaecati asperiores illo nihil
              harum ipsum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
