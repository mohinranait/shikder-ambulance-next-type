import { Button } from "@nextui-org/button";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";

export const metadata = {
  title: "ICU Ambulance Service in Dhaka | 24/7 Support",
  description:
    "We provide 24/7 emergency ambulance service in Dhaka. Contact us for quick medical transportation.",
  keywords: ["ambulance service", "emergency ambulance", "Dhaka ambulance"],
  openGraph: {
    title: "Best Ambulance Service in Dhaka | 24/7 Support",
    description: "We provide 24/7 emergency ambulance service in Dhaka.",
    url: "https://yourwebsite.com",
    siteName: "Your Ambulance Service",
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

const ICUAmbulance = () => {
  const icuTypes = [
    {
      title: "ICU Ambulance",
      content: "The besic life support ICU Ambulance Service is available in Dhaka. We provide emergency icu ambulance. 24/7 Customer Support.",
      link: "/",
    },

    {
      title: "CCU Ambulance",
      content: "Mobile critical care unit, transporting acutely ill patients with advanced medical equipment and highly trained medical professionals.",
      link: "/",
    },

    {
      title: "NICU Ambulance",
      content: "Neonatal intensive care transport, specialized ambulance, providing advanced medical care for critically ill newborns during transit.",
      link: "/",
    },

    {
      title: "PICU",
      content: "Pediatric intensive care transport, specialized ambulance, providing advanced medical care for critically ill children during transit",
      link: "/",
    },

    {
      title: "Ventilator with Ambulance",
      content: "Ambulance equipped with a ventilator, providing critical respiratory support for patients during transport to medical facilities.",
      link: "/",
    },
    {
      title: "General Ambulance Service",
      content: "The General Ambulance have Normal Oxygen Support, and Ac facilitices. We provide all types of Ambulance. When you need then Contact Us.",
      link: "/",
    },
  ]
  return (
    <>
      <section className=" mb-6 bg-[#dfdffff7] bg-right-bottom overflow-hidden relative ">
        <span className="flex w-[300px] bg-primary-mute h-[200px] top-1/2 left-1/2 bg-opacity-10 -translate-y-1/2 -translate-x-1/2 backdrop-blur-2xl absolute"></span>
        <span className="flex w-[300px] bg-secondary h-[200px] top-1/2 left-1/2 mt-8 bg-opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 backdrop-blur-2xl absolute"></span>
        <div className=" bg-opacity-50 backdrop-blur-[100px]">
          <div className="container py-10 xl:min-h-[500px] 2xl:min-h-[600px] flex items-center justify-center">
            <div className="">
              <h1 className="text-3xl mb-3 sm:leading-[90px] sm:text-4xl dark:text-white md:text-6xl text-black font-semibold text-center">
                ICU Ambulance Service in Dhaka, {" "}
                <span className=" font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                  Best Reliable 24/7
                </span>{" "}
              </h1>
              <p className="text-base text-black text-center dark:text-white">
                Life Support ICU Ambulance Service in Dhaka, Bangladesh.
                We Provide different types of Life support Ambulance With Doctors or brothers in Cheap Cost. We Are
                Just A Call Away.
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
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-4">
            Life Support ICU Ambulance Service in Bangladesh
          </h2>
          <div>
            <h3 className=" text-2xl font-semibold mb-2">
              ICU Ambulance Services
            </h3>
            <p> Life support ambulances are critical components of emergency medical systems, providing care from basic to advanced levels. BLS units, staffed by EMTs, offer essential interventions like CPR and oxygen. </p> <br />

            <p> The basic life support ICU Ambulance service in Dhaka, Bangladesh.
              ICU Ambulance service is one of the leading 24x7 Emergency
              Ambulance Services providers in Dhaka, Bangladesh.</p> <br />

            <p>ICU Ambulance is one of the leading 24x7 Emergency Ambulance Services providers
              in Dhaka, Bangladesh. For every emergency cases transferring and
              also critically ill patients to Hospitals or Nursiing Homes. </p> <br />

            <p>ICU Ambulance designed keeping in mind the space requirement of
              patients so as to easily fit the patient. All the staffs are
              Skilled and Trained in medical equipment.</p> <br />

            <p>ICU Ambulance Service in Dhaka, Bangladesh. We Provide Life support ICU, CCU, NICU
              Ambulance Service With Doctors or brother in Cheap Cost, so
              Contact us.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-2 mt-5">
            <div>
              <Image
                src={"/images/Life-Support-ICU-Ambulance-Service.jpg"}
                width={500}
                height={400}
                alt="Life Support ICU Ambulance Service"
              />
            </div>
            <div>
              <Image
                src={"/images/Life-Support-ICU-Ambulance-Service-02.jpg"}
                width={500}
                height={400}
                alt="Life Support ICU Ambulance Service"
              />
            </div>
          </div>
        </div>
        <div className="container py-8 my-8 bg-slate-200">
          <h2 className="text-center font-bold text-4xl mb-3"> Types of Life Support Ambulance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              icuTypes?.map((item, i) => <div key={i} className="rounded border border-slate-200 p-5 space-y-3 bg-white">
                <h3 className="font-bold text-2xl text-center "> {item.title} </h3>
                <p className="text-center text-slate-800">{item.content} </p>
                <div className="flex justify-center">
                  <Link className="py-1 px-2 text-sm bg-primary text-white rounded" href={`${item.link}`}>Learn More..</Link>
                </div>
              </div>)
            }
          </div>
        </div>
        <div className="container mb-4">
          <h2 className=" text-2xl font-bold mb-3 ">
            Basic Life Support ICU Ambulance
          </h2>
          <p>
            Life Support ICU Ambulance Service or ICU Ambulance is most important for emergency patients. We provide doctors with Life
            support ambulance. We provide emergency life support Ambulance Service! The best quality Ambulance Service is a prominent name for maintaining its impeccable service throughout the entire Bangladesh. This company provide any
            kind of EMERGENCY/URGENT ambulance service to the people with severe illness or pregnancy. </p> <br />
          <p>
            Shikder Ambulance Service will securely transport the patients to any hospital, anywhere in Bangladesh within your budget. We also have Freezer Van ambulances to safely carry the dead bodies in unchanged condition. Have a look at different types of ambulance service we provide.
          </p>
        </div>

        <div className="container grid md:grid-cols-2 gap-3">
          <div>
            <h2 className="text-2xl font-bold ">
              Emergency ICU Ambulance in Dhaka
            </h2>
            <p>
              Life support emergency Icu Ambulance service in Dhaka. We provide
              different types of life support ambulance with doctors or
              brothers. We are always ready to provide ICU Ambulance service in
              Dhaka, Dhanmondi ICU Ambulance service, Gulshan ICU Ambulance
              service is available. 24/7 life support Ambulance is available.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold ">
              Cardiac Support Ambulance (CCU)
            </h2>
            <p>
              When the patient is a cardiac patient and has a serious moment
              that he/she needs urgently to take into a hospital, you must need
              an ambulance service that can support the patient until they have
              been taken into the hospital to relieve their pain until they are
              taken to the hospital.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="container mb-4">
          <h2 className="text-2xl font-bold mb-2">
            Why should you choose us?
          </h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              <p> <b>Ambulance Quality:</b> We have three different types of ambulance and expert teams. </p>
            </li>
            <li>
              <p>
                <b>Patient Care:</b> Our ambulances are well equipped with all the
                necessary equipment.
              </p>
            </li>
            <li>
              <p>
                <b>Professional Service:</b> Our teams are well-trained and they always
                maintain their professionalism. No matter what happens around,
                patients are their utmost priority.
              </p>
            </li>
            <li>
              <p>
                <b>Available 24/7: </b> Our services are available at any time, any day. We are open twenty-four hours a day, seven-days a week. Contact on our emergency number. We are just a call away.
              </p>
            </li>
          </ul>
        </div>

        <div className="container">
          <h3 className="text-2xl font-bold mb-2">
            Why We are the best to the people?
          </h3>
          <div className="space-y-2">
            <ul className="list-disc pl-5 space-y-2">
              <li> 24/7 Customer Support.</li>
              <li> Quick Responce with friendly.</li>
              <li> All districts Ambulance Service.</li>
              <li> Driving with Expert Driver, and Assistant.</li>
              <li> Online Booking is Available.</li>
            </ul>

          </div>
        </div>
      </section>
    </>
  );
};

export default ICUAmbulance;
