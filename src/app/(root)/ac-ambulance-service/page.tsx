import { BASE_URL } from "@/config/accessEnv";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Ac Ambulance Service in Dhaka - The Best Reliable 24/7",
  description:
    "Ac Ambulance service in Dhaka. Contact us for quick medical transportation. We are always ready to provide service for you.",
  keywords: [
    "ambulance service",
    "emergency ambulance",
    "Dhaka ambulance",
    "Ac ambulance service",
    "Best Ac Ambulance",
  ],
  openGraph: {
    title: "Ac Ambulance Service in Dhaka - The Best Reliable 24/7",
    description:
      "Ac Ambulance service in Dhaka. Contact us for quick medical transportation. We are always ready to provide service for you.",
    url: "https://shikderambulance.com/ac-ambulance-service",
    siteName: "Shikder Ambulance",
    images: [
      {
        url: `${BASE_URL}/images/ambulnace.jpg`,
        width: 1200,
        height: 630,
        alt: "Ac Ambulance Service banar",
      },
    ],
    type: "website",
  },
};

const AcAmbulance = () => {
  return (
    <>
      <section className=" mb-6 bg-[#dfdffff7] bg-right-bottom overflow-hidden relative ">
        <span className="flex w-[300px] bg-primary-mute h-[200px] top-1/2 left-1/2 bg-opacity-10 -translate-y-1/2 -translate-x-1/2 backdrop-blur-2xl absolute"></span>
        <span className="flex w-[300px] bg-secondary h-[200px] top-1/2 left-1/2 mt-8 bg-opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 backdrop-blur-2xl absolute"></span>
        <div className=" bg-opacity-50 backdrop-blur-[100px]">
          <div className="container py-10 xl:min-h-[500px] 2xl:min-h-[600px] flex items-center justify-center">
            <div className="">
              <h1 className="text-3xl mb-3 sm:leading-[40px] sm:text-4xl dark:text-white md:text-6xl text-black font-semibold text-center">
                Ac Ambulance service in Dhaka
                <br />
                <span className=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                  The Best Reliable 24/7
                </span>{" "}
              </h1>
              <p className="text-base text-black text-center dark:text-white">
                Ac Ambulance service in Dhaka, Bangladesh. We provide different
                types of Ambulance service in all districts of Bangladesh. We
                Are Just A Call Away. Contact Us Now
              </p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <Button size="lg" className="bg-secondary text-white">
                  <Link href={"tel:01710060020"}>Call Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-4 pt-8">
        <div className="container mb-4">
          <h2 className="text-center text-2xl md:text-4xl font-bold py-6 ">
            {" "}
            Best Ac Ambulance Service in Bangladesh
          </h2>
          <div className="grid md:grid-cols-2 gap-2 mt-5">
            <div>
              <h3 className=" text-2xl font-semibold mb-2">
                Ac Ambulance Service
              </h3>
              <p className="mb-2">
                The Ac Ambulance is one of the best ambulance services in Dhaka
                as well as in the whole Bangladesh. An Ac ambulance is mainly
                used to transfer a patient to the hospital or a recently
                recovered person to his/her resident. Ac Ambulances have air
                conditioning systems. <br />
                As the temperature is very high in Bangladesh and we have to
                wait hours after hours in traffic, it can make a normal person
                fall sick. So it is crucial to maintain a suitable temperature
                for any patient and the companions.
              </p>
              <h3 className="font-bold text-2xl">
                Facilitices of Ac Ambulance{" "}
              </h3>
              <ul className="list-disc">
                <li> 24/7, Available.</li>
                <li> The Best reliable</li>
                <li>Controled tempreture of Ambulance</li>
                <li>Dhaka to All Districts Ambulance is Available</li>
                <li>All Types of Ambulanes</li>
                <li>Quality Ac Ambulance</li>
                <li>Ac, and Oxygen is free in Dhaka City.</li>
              </ul>
            </div>
            <div>
              <Image
                src={"/images/ac-ambulance-service.jpg"}
                width={500}
                height={400}
                alt="Ac Ambulance Service"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5 py-5">
        <div className="container mb-4">
          <h2 className="text-center text-3xl font-bold mb-2">
            {" "}
            24 Hours Ambulance Service in Bangladesh
          </h2>
          <p className="text-center">
            {" "}
            Emergency Ac Ambulance service is available in tha all districts of
            Bangladesh. Anytime, Anywhere.{" "}
          </p>
        </div>
        <div className="container">
          <h3 className=" text-2xl font-semibold mb-2">
            {" "}
            Emergency Ac Ambulance in Dhaka City
          </h3>
          <p>
            Emergency Ac Ambulance service is available in Dhaka City. This
            ambulance company provide{" "}
            <a
              href="http://https://24ambulance.com/emergency-ambulance-service/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Emergency ambulance service{" "}
            </a>{" "}
            24 hours in a day, 7 Days a week, and 365 days a year. The Emergency
            ambulance in cheap rent of ambulance services. We provide always a
            Standard ambulance with the proper requirements. Contact us to Get
            an Emergency ambulance service anywhere in Bangladesh. Fast
            ambulance service provider Company in Dhaka City. If you need an
            emergency ambulance than contact us.
          </p>{" "}
          <br />
          <p>
            <strong> Ac Ambulance service</strong> does cost you a bit extra
            compared to the Non-AC ambulance. If you want to have a smooth and
            relaxing journey, then a bit of extra cost will not matter to you.
            For a long journey, AC ambulance service is highly recommended. In
            our Ac Ambulance service, we provide neet and clean bed sheets,
            stretchers, oxygen cylinder and a first-aid box. There is ample room
            for the patient and his/her companions. If you{" "}
            <strong>need Ambulance service</strong> from anywhere in Dhaka city
            than contact us.
          </p>
        </div>

        <div className="container py-6">
          <h3 className=" text-2xl font-semibold mb-2">
            {" "}
            The Facilitices Using of Air Conditon Ambulance Service
          </h3>
          <ul className="list-disc">
            <li>
              {" "}
              AC ambulances provide a temperature-controlled environment for
              patients during transport.
            </li>
            <li>
              {" "}
              The cost of AC ambulance services may be higher than non-AC
              options.
            </li>
            <li>
              {" "}
              The cost of AC ambulance services may be higher than non-AC
              options.
            </li>
            <li>
              {" "}
              Many AC ambulance services operate 24/7 for emergency situations.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-5">
        <div className="container">
          <h3 className="text-xl font-bold mb-2">Ovrview of Ac Ambulance</h3>
          <ul className="space-y-2">
            <li>
              <p>
                {" "}
                <span className="font-semibold ">Patient Comfort: </span>{" "}
                Enhances comfort during transport, especially long distances.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span className="font-semibold ">
                  Temperature Control:{" "}
                </span>{" "}
                Maintains a cool, stable environment for patient comfort.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span className="font-semibold ">Increased Cost: </span>{" "}
                Typically more expensive than non-AC ambulances..
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span className="font-semibold ">Medical Stability: </span>{" "}
                Helps regulate body temperature for certain medical conditions.
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span className="font-semibold ">Available 24/7: </span>{" "}
                Anytime, Anywhere is Available.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AcAmbulance;
