import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Freezing Ambulance Service in Dhaka",
  description: "Freezing Ambulance Service in Dhaka. It is a dead body carrier ambulance. It has freezing box in it. The freezer ambulance can intact the dead body several hours and days.",
  keywords: ["freezing ambulance service", "freezing ambulance", "Dhaka freezing ambulance", "dead body carrier Ambulance"],
  openGraph: {
    title: "Freezing Ambulance Service in Dhaka",
    description: "Freezing Ambulance Service in Dhaka. It is a dead body carrier ambulance. It has freezing box in it. The freezer ambulance can intact the dead body several hours and days.",
    url: "https://shikderambulance.com/freezing-ambulance-service",
    siteName: "Shikder Ambulance",
    images: [
      {
        url: "https://yourwebsite.com/your-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ambulance Service Banner",
      },
    ],
    type: "website",
  },
};

const FreezingAmbulance = () => {
  return (
    <>
      <section className=" mb-6 bg-[#dfdffff7] bg-right-bottom overflow-hidden relative ">
        <span className="flex w-[300px] bg-primary-mute h-[200px] top-1/2 left-1/2 bg-opacity-10 -translate-y-1/2 -translate-x-1/2 backdrop-blur-2xl absolute"></span>
        <span className="flex w-[300px] bg-secondary h-[200px] top-1/2 left-1/2 mt-8 bg-opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 backdrop-blur-2xl absolute"></span>
        <div className=" bg-opacity-50 backdrop-blur-[100px]">
          <div className="container py-10 xl:min-h-[500px] 2xl:min-h-[600px] flex items-center justify-center">
            <div className="">
              <h1 className="text-3xl mb-3 sm:leading-[80px] sm:text-4xl dark:text-white md:text-6xl text-black font-semibold text-center">
                Freezing Ambulance service in Dhaka
              </h1>
              <p className="text-base text-black text-center dark:text-white">
                Freezing Ambulance service in Dhaka, Bangladesh. It is a dead body carrier ambulance. It has freezing box in it. The freezer ambulance can intact the dead body several hours and days. We Provide different types of ambulance service. We Are Just A Call Away. {" "}
              </p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <Button size="lg" className="bg-secondary text-white">
                  <Link href={"tel:01710060020"}>Contact Us Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-4 pt-8">
        <div className="container mb-4">
          <h2 className="text-center text-2xl md:text-4xl font-bold ">
            Latest Freezing Ambulance service in Dhaka
          </h2>
          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <div>
              <h3 className=" text-2xl font-semibold mb-3">
                Freezing Ambulance service
              </h3>
              <p className="mb-2 text-sm text-justify">
                We provide freezer ambulance service in Dhaka and all districts
                of Bangladesh. 24/7 hours ambulance service is available in
                Dhaka. Moving a dead body should be carefully handled as it is a
                very sensitive issue. In this case, a Freezer Van or Freezing
                Ambulance is used. In Freezer Van Ambulance, the dead body is
                normally kept at a certain temperature (-5%). It ensures that no
                bad smell from the body comes out. Also you can customize the
                ambulance temperature as per your need.{" "}
              </p>

              <p className="text-sm text-justify">
                We also provide different type of like: Ac ambulance, Non-Ac
                ambulance, and ICU Ambulance service so if you need any types of
                ambulance then you may contact us. If you want to move your near
                and dear ones, dead body to anywhere, using a Freezer Van
                Ambulance will be a wise decision. Otherwise, this can cause you
                many unwanted issues which you may not like afterwards. Say
                Good-Bye to your loved ones with proper Affection and Love!
              </p>
            </div>
            <div>
              <Image
                src={"/images/ambulnace.jpg"}
                width={600}
                height={400}
                alt="Ac Ambulance Service"
              />
            </div>
          </div>
        </div>

        <div className="container lg:max-w-[1000px] py-8">
          <h2 className="text-3xl font-bold text-center"> Types of Freezing it's Ambulance</h2>
          <div className="grid md:grid-cols-2  mt-4  gap-5 ">
            <div className="border border-slate-200 rounded p-5 bg-blue-100">
              <h3 className="text-xl font-semibold mb-2"> Single Cabin Freezing Ambulance Services </h3>
              <p className="text-justify mb-3"> Freezing Ambulance service in Dhaka. It is a dead body carrier ambulance with a frozen box. Freezing an ambulance is the best way to preserve the deceased body for extended periods, spanning hours to days. We provide single and Double-Cabin freezing Ambulances </p>
              <div className="flex justify-center">
                <Link href={'/'}>
                  <Button className="bg-primary text-white">Learn More...</Button>
                </Link>
              </div>

            </div>
            <div className="border border-slate-200 rounded p-5 bg-blue-100" >
              <h3 className="text-xl font-semibold"> Double Cabin Freezing Ambulance Service </h3>
              <p className="text-justify mb-3"> Double Cabin Freezing Ambulance service in Dhaka. It is a dead body carrier ambulance with a frozen box. Freezing an ambulance is the best way to preserve the deceased body for extended periods, spanning hours to days. We provide single and Double-Cabin freezing Ambulances</p>
              <div className="flex justify-center">
                <Link href={'/'}>
                  <Button className="bg-primary text-white">Learn More...</Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
        <div className="container mb-8">
          <h3 className=" text-2xl font-semibold mb-3 ">
            Dead body carrier freezing Ambulance service in Dhaka
          </h3>
          <p className="text-justify">
            A freezing ambulance is a kind of vehicle that is made to carry a
            dead body. It has a freezing compartment inside the vehicle that is
            perfect to contain a dead body and the ice compartment protects the
            dead body from decay. No matter how long the distance would have
            passed the body, the ambulance properly managed the body with its
            under 7-degree temperature. Even there is no chance of bad odor or
            internal infections when the body is inside the ambulance. If you
            require to transport the dead body from one side to another, you can
            find a freezing ambulance service to do the job perfectly.{" "}
          </p>
          <p className="text-justify">
            A freezer ambulance is a dead body carrier ambulance. It has
            freezing box in it. The freezer ambulance can intact the dead body
            several hours and days. People who want to keep their relatives dead
            body intact or free from germs or viruses for several hours or some
            days. They can rent a freezing ambulance from us. Some time the dead
            body comes from abroad or they need to stay more time before buried,
            in that case you need to this ambulance service.
          </p>
        </div>

        <div className="container grid md:grid-cols-2 mb-7 gap-3">
          <div>
            <h3 className="text-xl font-semibold ">
              Details of freezer Ambulance
            </h3>
            <ul className="space-y-1">
              <li>
                <p>
                  1. Freezer ambulance is used to transfer the dead body from
                  one place to another.
                </p>
              </li>
              <li>
                <p>
                  2. Freezer ambulance,s temperature is (-7) degree so there is
                  no bad odor from the body, and the body is free from the
                  virus.
                </p>
              </li>
              <li>
                <p>
                  3. This freezing ambulance rent is something more than a
                  normal ambulance, it is will be charge Dhaka city aria =
                  (2500-3000) Tk. Another rent of freezer ambulance according to
                  destination and Waiting for a charge per hours=600/= Six
                  hundred taka only any place of Bangladesh.
                </p>
              </li>
              <li>
                <p>4. High quality steel stretchers keeping the dead body.</p>
              </li>
              <li>
                <p>5. There are lighting facilities inside to see the body.</p>
              </li>
              <li>
                <p>
                  6. There is a good side glass to see the dead body from
                  outside.
                </p>
              </li>
              <li>
                <p>
                  7. We clean the car by date or seven after completed the duty.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold ">
              Freezing Ambulance Available Area of Dhaka
            </h3>
            <div className="space-y-2">
              <p className="text-justify">
                freezing Ambulance Mogbazar, Ramna freezing Ambulance, Mohakhali
                freezing Ambulance, The dead body carrier Ambulance service.
                frozen box Ambulance, lash bahi ambulance. frozen ambulance
                number, freezing ambulance Airport, Dhaka Airport Ambulance.
              </p>

              <p className="text-justify">
                Shikder Ambulance service is 24/7 Available. Dhaka Airport
                freezing Ambulance in anytime. We Provide different types of
                ambulance service. We Are Just A Call Away. Contact Us Now
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="container">
          <h3 className="text-xl font-semibold mb-2">
            Ovrview of Ac ambulance
          </h3>
          <ul className="space-y-2">
            <li>
              <p>
                Freezer ambulance is used to transfer the dead body from one
                place to another.
              </p>
            </li>
            <li>
              <p>
                {" "}
                Freezer ambulance,s temperature is (-7) degree so there is no
                bad odor from the body, and the body is free from the virus.
              </p>
            </li>
            <li>
              <p>
                {" "}
                This freezing ambulance rent is something more than a normal
                ambulance, it is will be charge Dhaka city aria = (2500-3000)
                Tk. Another rent of freezer ambulance according to destination
                and Waiting for a charge per hours=600/= Six hundred taka only
                any place of Bangladesh.
              </p>
            </li>
            <li>
              <p>High quality steel stretchers keeping the dead body.</p>
            </li>
            <li>
              <p>There are lighting facilities inside to see the body.</p>
            </li>
            <li>
              <p>
                There is a good side glass to see the dead body from outside.
              </p>
            </li>
            <li>
              <p>We clean the car by date or seven after completed the duty.</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default FreezingAmbulance;
