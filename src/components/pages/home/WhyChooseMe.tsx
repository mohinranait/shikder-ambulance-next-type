import Image from "next/image";
import React from "react";

const WhyChooseMe = () => {
  return (
    <section className="py-10 bg-white dark:bg-black home_category_section ">
      <div className="container pb-4">
        <div className="mb-4 lg:w-1/2 mx-auto ">
          <h2 className="text-3xl font-semibold text-center">
            Why Choose Our Services
          </h2>
          <p className="text-center">The best Service and Trusted Company.</p>
        </div>
      </div>
      <div className="container grid lg:grid-cols-2">
        <div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-slate-800">
              Available 24/7
            </h3>
            <p>
              Seeking urgent medical help in Dhaka? Opt for our trustworthy 24/7
              Ambulance Service in Dhaka. Count on us to stand by your side
              around the clock, ready to assist whenever you need us.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-slate-800">
              Different Kinds of Ambulances
            </h3>
            <p>
              Ambulances are crafted in diverse types, each tailored to address
              distinct medical requirements and scenarios. Let is explore some
              varieties of ambulances.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-slate-800">
              Quality and Low-Cost
            </h3>
            <p>
              In search of a cost-effective ambulance service? Look no further
              Ambulance is your go-to for top-notch emergency transportation at
              budget-friendly rates.
            </p>
          </div>
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

export default WhyChooseMe;
