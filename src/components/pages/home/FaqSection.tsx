"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaBars } from "react-icons/fa";
const FaqSection = () => {
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
        <div className="container grid grid-cols-1 lg:grid-cols-2">
          <div></div>
          <div>
            <Accordion
              variant="splitted"
              className="flex flex-col gap-4"
              showDivider={false}
            >
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Accordion 1"
                className="bg-slate-100 bg-opacity-15 p-2 rounded-lg  text-white"
                indicator={<FaBars />}
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Accordion 2"
                className="bg-slate-100 bg-opacity-15 p-2 rounded-lg text-white"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
                className="bg-slate-100 bg-opacity-15 p-2 rounded-lg  text-white"
              >
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
