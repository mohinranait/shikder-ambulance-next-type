import AboutSection from "@/components/pages/home/AboutSection";
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
    title: "Best Ambulance Service in Dhaka | 24/7 Support",
    description: "We provide 24/7 emergency ambulance service in Dhaka.",
    url: "https://shikderambulance.com",
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

const ambulanceTypes = [
  {
    _id: "1",
    icon: <Car className="text-primary" size={30} />,
    title: "Ac ambulance service",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum?",
    url: "/",
  },
  {
    _id: "2",
    icon: <Ambulance className="text-primary" size={30} />,
    title: "Ac ambulance service",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum?",
    url: "/",
  },
  {
    _id: "3",
    icon: <CarFront className="text-primary" size={30} />,
    title: "Ac ambulance service",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum?",
    url: "/",
  },
  {
    _id: "4",
    icon: <Cross className="text-primary" size={30} />,
    title: "Ac ambulance service",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum?",
    url: "/",
  },
  {
    _id: "5",
    icon: <Cross className="text-primary" size={30} />,
    title: "Ac ambulance service",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum?",
    url: "/",
  },
  {
    _id: "6",
    icon: <Cross className="text-primary" size={30} />,
    title: "Ac ambulance service",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum?",
    url: "/",
  },
];

const AboutPage = async () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container py-16 ">
          <h1 className="text-white mb-2 text-4xl font-semibold text-center">
            About US: Shikder Ambulance Service
          </h1>
          <p className="text-center text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            autem earum laudantium qui accusantium sit.
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
          <h2 className="text-center text-xl font-bold">
            About Shikder ambulance
          </h2>
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            doloribus.
          </p>
          <div className="grid md:grid-cols-2 mt-5 gap-5">
            <div>
              <h3 className="text-base font-bold">About us</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                voluptatum vitae ratione quaerat beatae amet.
              </p>
              <ul className="list-disc mt-2 pl-5">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
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
      <section>
        <div className="container ">
          <h2 className="text-2xl font-bold text-center">
            Type of your service
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
          <h2 className="text-center text-xl font-bold">
            About Shikder ambulance
          </h2>
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            doloribus.
          </p>
          <div className=" mt-5">
            <div>
              <h3 className="text-base font-bold">About us</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                voluptatum vitae ratione quaerat beatae amet. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Nihil voluptatum vitae
                ratione quaerat beatae amet.
              </p>
              <ul className="list-disc mt-2 pl-5">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
