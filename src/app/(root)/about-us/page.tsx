import AboutSection from "@/components/pages/home/AboutSection";
import { ambulanceTypes } from "@/const-data/statick";
import { Button } from "@nextui-org/button";
import {
  Ambulance,
  AmbulanceIcon,
  Car,
  CarFront,
  Cross,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export const metadata = {
  title: "About Us: Shikder Ambulance",
  description:
    "About Us: Shikder Ambulance is the best Ambulance Company in Bangladesh. We provide the different types of Ambulances in the all districts of Bangladesh. 24 Hours Ambulance Support is Available.",
  keywords: [
    "About Us",
    "ambulance service",
    "emergency ambulance",
    "Dhaka ambulance",
    "best ambulance",
    "Shikder Ambulance",
  ],
  openGraph: {
    title: "About Us: Shikder Ambulance 24/7",
    description: "Shikder Ambulance is the best Ambulance Company in Bangladesh. We provide the different types of Ambulances in the all districts of Bangladesh. Visite to learn more About Us.",
    url: "https://shikderambulance.com/about-us",
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



const AboutPage = async () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container py-16 ">
          <h1 className="text-white mb-2 text-4xl font-semibold text-center">
            About Us: Shikder Ambulance Service
          </h1>
          <p className="text-center text-slate-300 ">
            Shikder Ambulance is the best Ambulance Company in Bangladesh. We provide the different types of Ambulances in the all districts of Bangladesh. Visite to learn more About Us.
          </p>
          <ul className="flex items-center gap-2 pt-2 justify-center">
            <li>
              <Link href="/" className="font-medium text-base text-slate-200">
                Home
              </Link>
            </li>
            <li className="font-medium text-base text-slate-200">/</li>
            <li className="font-medium text-base text-slate-200">About Us</li>
          </ul>
        </div>
      </section>
      <section className="py-10">
        <div className="container">
          <h2 className="text-center text-4xl font-bold mb-3">
            Shikder Ambulance Services in Bangladesh
          </h2>
          <p className="text-center mb-3">
            The largest and Trusted Ambulance provider company.
          </p>
          <div className="grid md:grid-cols-2 mt-5 gap-5">
            <div>
              <h3 className="text-2xl font-bold mb-2">About Shikder Ambulance</h3>
              <p>
                Shikder Ambulance Service in Bangladesh. The Largest and Trusted Ambulance Company in Bangladesh. We provide different types of Ambulances. We are always ready to provide emergency ambulance service in all over Bangladesh.
              </p>
              <ul className="list-disc mt-2 pl-5">
                <li><b>Service Time:</b> 24/7 Available.</li>
                <li><b>Service Area:</b> All districts of Bangladesh</li>
                <li><b>Customer Responsive:</b> We provide customer service with friendly and very responsive.</li>
                <li><b>Quality:</b> The Best Quality Ambulance is Available.</li>
              </ul>
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
      </section>

      <section className="py-10">
        <div className="container ">
          <h2 className="text-3xl font-bold text-center">
            Types of Ambulance Services
          </h2>
          <div className="grid md:grid-cols-2 mt-3 lg:grid-cols-3 gap-5">
            {ambulanceTypes?.map((item, index) => (
              <div
                key={index}
                className="border space-y-3 border-slate-200 rounded p-5"
              >
                <div className="w-14 h-14 flex items-center justify-center mx-auto rounded-full bg-primary-mute">
                  {item.icon}
                </div>
                <h3 className="text-base text-center font-normal text-slate-950">
                  {item?.title}
                </h3>
                <p className="mb-4 text-sm text-center text-slate-700">
                  {item?.content}
                </p>
                <div className="flex justify-center">
                  <Link
                    href={`${item?.url}`}
                    className="py-1 inline-block px-2 bg-primary text-white text-xs rounded"
                  >
                    Learn more...
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <h2 className="text-center text-3xl font-bold mb-3">
            Emergency Ambulance Services in Bangladesh
          </h2>
          <p className="text-center ">
            The Largest and Trusted Ambulance Company
          </p>
          <div className=" mt-5">
            <div>
              <h3 className="font-bold text-2xl mb-3">Welcome to Shikder Ambulance </h3>
              <p>
                Shikder Ambulance, your go-to choice for Emergency Ambulance Service! Our team is dedicated to providing timely and efficient medical transportation whenever you need it. Trust us to ensure you reach your destination safely and comfortably.
              </p>
            </div>
          </div>

          <div className=" mt-5">
            <div>
              <h3 className="font-bold text-2xl mb-3">Rapid Response Time</h3>
              <p>
                This is the cornerstone. Minimizing the time from receiving a call to arriving on scene is absolutely vital. This involves:
              </p>
              <ul className="list-disc mt-2 pl-5">
                <li>Efficient dispatch systems.</li>
                <li>Strategic ambulance placement.</li>
                <li>Real-time traffic and navigation optimization.</li>
                <li>Highly trained drivers capable of safe, rapid transit.</li>
              </ul>
            </div>
          </div>

          <div className=" mt-5">
            <div>
              <h3 className="font-bold text-2xl mb-3">Reliability and Availability</h3>
              <p>
                An emergency service must be consistently available. This means:
              </p>
              <ul className="list-disc mt-2 pl-5">
                <li>24/7 coverage.</li>
                <li>A sufficient fleet of well-maintained ambulances.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutPage;
