"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
const Faq = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
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
              Frequently ask question for customers
            </h2>
            <p className="text-center text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
              dolores?
            </p>
          </div>
        </div>
        <div className="container ">
          <Accordion
            variant="splitted"
            className="flex flex-col gap-4 "
            showDivider={false}
            defaultExpandedKeys={["1"]}
          >
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title={<p className="text-white text-left">Accordion 1</p>}
              className="bg-slate-100 bg-opacity-15 p-1 pl-4 rounded-lg  text-white"
              // indicator={<FaBars />}
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title={<p className="text-white text-left">Accordion 2</p>}
              className="bg-slate-100 bg-opacity-15 p-1 pl-4 rounded-lg  text-white"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title={<p className="text-white text-left">Accordion 3</p>}
              className="bg-slate-100 bg-opacity-15 p-1 pl-4 rounded-lg  text-white"
            >
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
