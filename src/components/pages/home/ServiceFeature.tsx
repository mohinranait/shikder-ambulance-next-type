import Image from "next/image";
import React from "react";

const ServiceFeature = () => {
  return (
    <section className="py-10 bg-white dark:bg-black home_category_section ">
      <div className="container pb-4">
        <div className="mb-4 lg:w-1/2 mx-auto ">
          <h2 className="text-3xl font-semibold text-center">
            Emergency ambulance service
          </h2>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
            dolores?
          </p>
        </div>
      </div>
      <div className="container grid lg:grid-cols-2">
        <div>
          <h3 className="text-2xl text-slate-800 font-semibold">
            Shikder ambulance service
          </h3>
          <p className="text-slate-700 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            voluptatem impedit at, itaque dolore quaerat iure quasi hic veniam
            distinctio!
          </p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-slate-800">
              Facilities of ambulance
            </h3>
          </div>
          <ul className="flex flex-col gap-1">
            <li>
              <p className="text-base font-medium text-slate-700">
                Compatitib pricing, High quality service
              </p>
            </li>
            <li>
              <p className="text-base font-medium text-slate-700">
                We have strature available for transporting
              </p>
            </li>
            <li>
              <p className="text-base font-medium text-slate-700">
                Service readit to away
              </p>
            </li>
            <li>
              <p className="text-base font-medium text-slate-700">
                Clean Oxigine{" "}
              </p>
            </li>
            <li>
              <p className="text-base font-medium text-slate-700">
                Service 24/4 hours open
              </p>
            </li>
          </ul>
        </div>
        <div>
          <Image
            width={400}
            height={300}
            alt="iamge"
            src={"/images/ambulnace.jpg"}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceFeature;
