import Image from "next/image";
import React from "react";

const ServiceFeature = () => {
  return (
    <section className="py-10 bg-white dark:bg-black home_category_section ">
      <div className="container pb-4">
        <div className="mb-4 lg:w-1/2 mx-auto ">
          <h2 className="text-3xl font-semibold text-center">
            Emergency ambulance Service
          </h2>
          <p className="text-center">
            Anytime, Anywhere Ambulance Support Available.
          </p>
        </div>
      </div>
      <div className="container grid lg:grid-cols-2">
        <div>
          <h3 className="text-2xl text-slate-800 font-semibold">
            Shikder ambulance service
          </h3>
          <p className="text-slate-700 font-normal">
            Shikder Ambulance service in Dhaka, Bangladesh. Looking for a
            reliable ambulance service you can count on? Look no further!
            Shikder Ambulance is dedicated to delivering top-notch medical
            transportation services in the area. Whether it is an urgent
            situation or a routine transfer, our team is fully prepared to
            manage the task effectively. Our courteous and expert professionals
            recognize the significance of both comfort and safety, prioritizing
            your well-being throughout the entire journey. Shikder Ambulance,
            and allow us to guide you to your destination with the most care and
            precision.
          </p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-slate-800">
              Facilities of Shikder Ambulance
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
                Clean & Hygienic Ambulances{" "}
              </p>
            </li>
            <li>
              <p className="text-base font-medium text-slate-700">
                Service: 24/7 Open
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
