import ContactUsForm from "@/components/forms/ContactUsForm";
import CallSvgIcon from "@/components/svg/CallSvgIcon";
import Image from "next/image";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";

const ContactUs = () => {
  return (
    <>
      <section className="contact-wrapper dark:bg-background-white">
        <div className="container max-w-[1200px]">
          <div className="lg:10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
            <Card shadow="sm" className="shadow-none" isPressable>
              <CardBody className="overflow-visible p-0">
                <div className="contact-box bg-white dark:bg-black">
                  <div className="icon-box">
                    <CallSvgIcon />
                  </div>
                  <h1 className="text-text-title">Contact Number</h1>
                  <p className="text-text-gray">+8801 754 123 456</p>
                  <p className="text-text-gray">+8801 754 123 456</p>
                </div>
              </CardBody>
            </Card>

            <Card shadow="sm" className="shadow-none" isPressable>
              <CardBody className="overflow-visible p-0">
                <div className="contact-box bg-white dark:bg-black">
                  <div className="icon-box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h1 className="text-text-title">Email Address</h1>
                  <p className="text-text-gray">info@gmail.us</p>
                  <p className="text-text-gray">info@gmail.us</p>
                </div>
              </CardBody>
            </Card>

            <Card shadow="sm" className="shadow-none" isPressable>
              <CardBody className="overflow-visible p-0">
                <div className="contact-box bg-white dark:bg-black">
                  <div className="icon-box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5.46005 18.49V15.57C5.46005 14.6 6.22005 13.73 7.30005 13.73C8.27005 13.73 9.14005 14.49 9.14005 15.57V18.38C9.14005 20.33 7.52005 21.9501 5.57005 21.9501C3.62005 21.9501 2.00005 20.32 2.00005 18.38V12.22C1.89005 6.60005 6.33005 2.05005 11.95 2.05005C17.57 2.05005 22 6.60005 22 12.11V18.2701C22 20.2201 20.38 21.84 18.43 21.84C16.48 21.84 14.86 20.2201 14.86 18.2701V15.46C14.86 14.49 15.62 13.62 16.7 13.62C17.67 13.62 18.54 14.38 18.54 15.46V18.49"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h1 className="text-text-title">Hours of Support</h1>
                  <p className="text-text-gray">
                    Monday - Friday: 08:30 AM - 11:30 PM
                  </p>
                  <p className="text-text-gray">
                    Saturday - Sunday: 10:30 AM - 08:30 PM
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="shape animation-one">
          <Image
            className="img"
            src={"/images/icon/1.webp"}
            width={68}
            height={68}
            alt="Icon"
          />
        </div>
      </section>

      <section
        className="py-[100px] dark:bg-background-white"
        style={{ backgroundImage: `url('/images/background/contact-bg.png')` }}
      >
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-10">
            <div>
              <div className="form-wrapper">
                <h2 className="text-white mb-2 text-2xl font-semibold">
                  Get Touch{" "}
                </h2>
                <p className="text-white text-base font-medium mb-8 md:pr-16 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                </p>
                <ContactUsForm />
              </div>
            </div>
            <div>
              <Image
                className="right-img desktop-img rounded-lg lg:rounded-none"
                src={"/images/contact-img.webp"}
                alt="contact img"
                height={645}
                width={880}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
