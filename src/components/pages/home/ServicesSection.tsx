import React from "react";
import { FaCarSide } from "react-icons/fa";
import { Card, CardBody } from "@nextui-org/react";
import { BiSolidAmbulance } from "react-icons/bi";
import { LiaAmbulanceSolid } from "react-icons/lia";

const ServicesSection = () => {
  return (
    <section className="py-10">
      <div className="container  ">
        <div className="mb-4 lg:w-1/2 mx-auto ">
          <h2 className="text-3xl font-semibold text-center">Services</h2>
          <p className="text-center">
            <b>
              The different types of Ambulances is Available in all districts of
              Bangladesh
            </b>
          </p>
        </div>

        <div className="grid pt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 services">
          <Card shadow="sm" className="shadow-none service_card" isPressable>
            <CardBody className="overflow-visible p-0">
              <div className=" group flex flex-col gap-2 shadow p-4 h-full bg-white dark:bg-black overflow-hidden rounded-[18px] relative">
                <span className="rounded-full group-hover:w-32 group-hover:h-32 transition-all duration-500 w-28  h-28 absolute -top-16 -right-16 bg-primary z-10"></span>
                <span className="rounded-full group-hover:w-48 group-hover:h-48 transition-all duration-500 w-40 h-40 absolute -top-[90px] -right-[90px] bg-secondary z-0"></span>
                <div className="rounded-full w-24 h-24 flex items-center justify-center bg-slate-100">
                  <LiaAmbulanceSolid size={35} className="text-primary" />
                </div>
                <p className="text-xl font-semibold text-black">Ac Ambulance</p>
                <p className="text-gray text-base font-medium">
                  AC Ambulance Service is Comfortable in Critical Times. The Ac
                  Ambulance is the best quality to provide a patient a place to
                  Another place or hospital. The best ambulance provide, the
                  best Service for you!
                </p>
              </div>
            </CardBody>
          </Card>
          <Card shadow="sm" className="shadow-none service_card" isPressable>
            <CardBody className="overflow-visible p-0">
              <div className=" flex group flex-col gap-2 shadow p-4 h-full bg-white dark:bg-black overflow-hidden rounded-[18px] relative">
                <span className="rounded-full group-hover:w-32 group-hover:h-32 transition-all duration-500 w-28  h-28 absolute -top-16 -right-16 bg-primary z-10"></span>
                <span className="rounded-full group-hover:w-48 group-hover:h-48 transition-all duration-500 w-40 h-40 absolute -top-[90px] -right-[90px] bg-secondary z-0"></span>
                <div className="rounded-full w-24 h-24 flex items-center justify-center bg-slate-100">
                  <FaCarSide size={35} className="text-primary" />
                </div>
                <p className="text-xl font-semibold text-black">
                  Non-Ac Ambulance
                </p>
                <p className="text-gray text-base font-medium">
                  Non-Ac Ambulance is like Ac ambulance. The all Facilities have
                  in it like Ac ambulance wihout Ac support. Ac Ammbulance and
                  Non-Ac Ambulance same quality.
                </p>
              </div>
            </CardBody>
          </Card>

          <Card shadow="sm" className="shadow-none service_card" isPressable>
            <CardBody className="overflow-visible p-0">
              <div className=" flex group flex-col gap-2 shadow p-4 h-full bg-white dark:bg-black overflow-hidden rounded-[18px] relative">
                <span className="rounded-full group-hover:w-32 group-hover:h-32 transition-all duration-500 w-28  h-28 absolute -top-16 -right-16 bg-primary z-10"></span>
                <span className="rounded-full group-hover:w-48 group-hover:h-48 transition-all duration-500 w-40 h-40 absolute -top-[90px] -right-[90px] bg-secondary z-0"></span>
                <div className="rounded-full w-24 h-24 flex items-center justify-center bg-slate-100">
                  <BiSolidAmbulance size={35} className="text-primary" />
                </div>
                <p className="text-xl font-semibold text-black">
                  Freezing Ambulance
                </p>
                <p className="text-gray text-base font-medium">
                  The freezing Ambulance is called the dead body carrier
                  Ambulance. It is a dead body carrier ambulance. It has a
                  frozen box. Keep the dead body for several days.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
