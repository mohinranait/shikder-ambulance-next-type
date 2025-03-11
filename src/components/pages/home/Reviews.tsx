"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

const Reviews = () => {
  return (
    <>
      <section className="py-10 bg-white dark:bg-black home_category_section ">
        <div className="container">
          <div className="mb-4 lg:w-1/2 mx-auto">
            <h2 className="text-3xl font-semibold text-center">Reviews</h2>
            <p className="text-center">
              Many customers rely on reviews before choosing a service.
            </p>
          </div>
          <div className="   mt-10">
            <Swiper className="mySwiper ">
              <SwiperSlide>
                <div className="min-h-[350px] relative flex items-center justify-center bg-white dark:bg-black">
                  <Image
                    alt="Avater"
                    src="/images/avater/profile1.png"
                    className="w-10 h-10 sm:w-16 lg:w-[100px] sm:h-16  lg:h-[100px] rounded-full  absolute top-2 lg:top-5 left-5 "
                    width={200}
                    height={200}
                  />

                  <Image
                    alt="Avater"
                    src="/images/avater/profile1.png"
                    className=" w-10 h-10 sm:w-16 lg:w-[100px]  sm:h-16 lg:h-[100px] rounded-full absolute bottom-0 left-5 top-[45%] lg:bottom-5 lg:left-16 "
                    width={200}
                    height={200}
                  />

                  <Image
                    alt="Avater"
                    src="/images/avater/profile1.png"
                    className="w-10 h-10 sm:w-16 lg:w-[100px] sm:h-16  lg:h-[100px] rounded-full  absolute top-2 lg:top-5 right-5"
                    width={200}
                    height={200}
                  />
                  <Image
                    alt="Avater"
                    src="/images/avater/profile1.png"
                    className="w-10 h-10 sm:w-16 lg:w-[100px]  sm:h-16 lg:h-[100px] rounded-full absolute bottom-0 right-5 top-[45%] lg:bottom-5 lg:right-16"
                    width={200}
                    height={200}
                  />
                  <div className="flex flex-col  justify-center items-center px-10 gap-5 pt-8">
                    <div className="">
                      <Image
                        alt="Avater"
                        src="/images/avater/profile1.png"
                        className="w-[80px] h-[80px] rounded-full "
                        width={200}
                        height={200}
                      />
                    </div>
                    <div>
                      <p className="text-base text-primary  text-center">
                        Sakib Rahul{" "}
                      </p>
                      <p className="text-xs font-normal text-center">
                        Sakib Rahul{" "}
                      </p>
                    </div>
                    <div className="lg:w-1/2">
                      <p className="text-center text-gray text-base ">
                        "The ambulance arrived incredibly quickly, which made all the difference."
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="min-h-[350px] relative flex items-center justify-center bg-white">
                  <div>
                    <div className="mb-4">
                      <Image
                        alt="Avater"
                        src="/images/avater/profile1.png"
                        className="w-[120px] h-[120px] rounded-full "
                        width={200}
                        height={200}
                      />
                    </div>
                    <div>
                      <p className="text-base text-black text-center">
                        Sakib Rahul{" "}
                      </p>
                      <p className="text-xs font-normal text-center">
                        Sakib Rahul{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="min-h-[350px] relative flex items-center justify-center bg-white">
                  <div>
                    <div className="mb-4">
                      <Image
                        alt="Avater"
                        src="/images/avater/profile1.png"
                        className="w-[120px] h-[120px] rounded-full "
                        width={200}
                        height={200}
                      />
                    </div>
                    <div>
                      <p className="text-base text-black text-center">
                        Sakib Rahul{" "}
                      </p>
                      <p className="text-xs font-normal text-center">
                        Sakib Rahul{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
