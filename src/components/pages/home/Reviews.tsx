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
      <section className="py-10 home_category_section">
        <div className="container ">
          <div className="mb-4 lg:w-1/2 mx-auto ">
            <h2 className="text-3xl font-semibold text-center">Reviews</h2>
            <p className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
              dolores?
            </p>
          </div>
          <div className="   mt-10">
            <Swiper className="mySwiper">
              <SwiperSlide>
                <div className="min-h-[350px] relative flex items-center justify-center bg-slate-100">
                  <Image
                    alt="Avater"
                    src="/images/avater/profile1.png"
                    className="w-[100px] h-[100px] rounded-full absolute top-5 left-16 "
                    width={200}
                    height={200}
                  />

                  <Image
                    alt="Avater"
                    src="/images/avater/profile1.png"
                    className="w-[100px] h-[100px] rounded-full absolute bottom-5 left-16 "
                    width={200}
                    height={200}
                  />

                  <Image
                    alt="Avater"
                    src="/images/avater/profile1.png"
                    className="w-[100px] h-[100px] rounded-full absolute top-5 right-16"
                    width={200}
                    height={200}
                  />
                  <Image
                    alt="Avater"
                    src="/images/avater/profile1.png"
                    className="w-[100px] h-[100px] rounded-full absolute bottom-5 right-16"
                    width={200}
                    height={200}
                  />
                  <div className="flex flex-col  justify-center items-center px-10 gap-5 pt-8">
                    <div className="lg:w-1/2">
                      <p className="text-center text-gray text-base ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente, itaque impedit doloremque accusantium minima
                        nostrum. Eveniet tempora fugit quod perferendis.
                      </p>
                    </div>
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
                <div className="min-h-[350px] relative flex items-center justify-center bg-slate-100">
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
                <div className="min-h-[350px] relative flex items-center justify-center bg-slate-100">
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
