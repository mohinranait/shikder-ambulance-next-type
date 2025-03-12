"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
const Faq = () => {

  const faqs = [
    {
      _id: "1",
      title: "What is the Shikder Ambulance service?",
      content:
        "Shikder Ambulance is the largest and trusted Ambulance provider company in Bangladesh. We provide different types of Ambulances. When you need Ambulance support then Contact Us.",
    },
    {
      _id: "2",
      title: "What is an ambulance service, and when should I call one?",
      content:
        "Ambulance services consist of specialized vehicles outfitted to deliver medical care and transport individuals during emergencies. It is crucial to dial an ambulance in scenarios involving serious injuries, medical crises, or when someone is life is in jeopardy. ",
    },
    {
      _id: "3",
      title:
        "Can I request a specific hospital for the ambulance to take me to?",
      content:
        " Yes,  you may have the option to designate a particular hospital. Nevertheless, the ambulance crew will give precedence to the closest suitable medical facility, considering the patientis condition.",
    },

    {
      _id: "4",
      title: "How often is the ambulance service provided?",
      content:
        "24/7 Hours Ambulance is Available in Bangladesh. We are always ready to provide emergency Ambulance provide to you.",
    },

    {
      _id: "5",
      title: "How can I book the services of Shikder Ambulance?",
      content:
        " You can book An Ambulance at Shikder Ambulance through our hassle-free appointment system. You can contact us by Phone, or Online Calling by Whatsapp, and our team is is available 24/7 to assist you. If you need emergency Ambulances then contact Us: 017100-60020",
    },
  ];
  return (
    <section
      className="bg-no-repeat bg-cover bg-center"
      style={{
        background: `url('/images/background/ambulance.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="py-10 bg-black bg-opacity-50 backdrop-blur">
        <div className="container pb-4">
          <div className="mb-4 lg:w-1/2 mx-auto ">
            <h2 className="text-3xl text-white  font-semibold text-center">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-center text-white">
              When people interact with ambulance services, whether in an
              emergency or seeking information, they commonly have several key
              questions.
            </p>
          </div>
        </div>
        <div className="container ">
          <Accordion
            variant="splitted"
            className="flex flex-col gap-4 "
            showDivider={false}
            defaultExpandedKeys={["0"]}
          >
            {faqs?.map((item, index) => (
              <AccordionItem
                key={`${index}`}
                aria-label={`Accordion ${index}`}
                title={<p className="text-white text-left">{item?.title}</p>}
                className="bg-slate-100 bg-opacity-15 p-1 pl-4 rounded-lg  text-white"
              // indicator={<FaBars />}
              >
                {item?.content}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
