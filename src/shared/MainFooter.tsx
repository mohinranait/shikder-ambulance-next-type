
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { ChevronsRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const MainFooter = () => {

  return (
    <div className="footer-wrapper">
      <div className="innerbg">
        <div className="inner-wrapper">
          <div className="border-b pb-5 border-slate-800">
            <ul className="flex  divide-slate-400  divide-x-1  items-center  justify-center">
              <li className="leading-[10px]">
                <Link
                  href="/"
                  className="px-3 leading-[12px] text-sm text-slate-500 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li className="leading-[10px]">
                <Link
                  href="/about-us"
                  className="px-3 leading-[12px] text-sm text-slate-500 hover:text-white"
                >
                  About US
                </Link>
              </li>
              <li className="leading-[10px]">
                <Link
                  href="/contact-us"
                  className="px-3 leading-[12px] text-sm text-slate-500 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li className="leading-[10px]">
                <Link
                  href="/privacy-policy"
                  className="px-3 leading-[12px] text-sm text-slate-500 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="container">
            <footer className="footer-link">
              <div className="grid  sm:grid-cols-4 gap-12">
                <div className="col-span-2 lg:col-span-1">
                  <h4 className="title text-slate-100">Follow Social Media</h4>
                  <ul className="link-list flex items-center gap-2">
                    <li className="w-[36px] flex items-center group justify-center hover:border-white hover:text-white h-[36px] rounded-full border border-slate-600">
                      <Link
                        className="link group-hover:text-white w-[36px] h-[36px] flex items-center justify-center"
                        href={"https://www.facebook.com/shikderambulance"} target="_blank"
                      >
                        <FaFacebookF />
                      </Link>
                    </li>

                    <li className="w-[36px] flex items-center group justify-center hover:border-white hover:text-white h-[36px] rounded-full border border-slate-600">
                      <Link
                        className="link group-hover:text-white w-[36px] h-[36px] flex items-center justify-center"
                        href={"https://www.linkedin.com/in/shikder-ambulance/"}
                      >
                        <FaLinkedin />
                      </Link>
                    </li>
                    <li className="w-[36px] flex items-center group justify-center hover:border-white hover:text-white h-[36px] rounded-full border border-slate-600">
                      <Link
                        className="link group-hover:text-white w-[36px] h-[36px] flex items-center justify-center"
                        href={"https://www.youtube.com/@shikderambulance"}
                      >
                        <FaYoutube />
                      </Link>
                    </li>

                  </ul>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <h2 className="title text-slate-100">Quick Links</h2>
                  <ul className="link-list">
                    <li className="flex items-center gap-1">
                      <ChevronsRight className="text-white" size={16} />
                      <Link className="link" href={"/ac-ambulance-service"}>
                        Ac Ambulance Service
                      </Link>
                    </li>
                    <li className="flex items-center gap-1">
                      <ChevronsRight className="text-white" size={16} />
                      <Link
                        className="link"
                        href={"/freezing-ambulance-service"}
                      >
                        Freezing Ambulance
                      </Link>
                    </li>
                    <li className="flex items-center gap-1">
                      <ChevronsRight className="text-white" size={16} />
                      <Link className="link" href={"/icu-ambulance-service"}>
                        ICU, CCU, NICU Ambulance
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <h2 className="title text-slate-100">Resources</h2>
                  <ul className="link-list">
                    <li>
                      <span className="link">
                        Eskaton Road, Mogbazar, Dhaka-1217
                      </span>
                    </li>
                    <li>
                      <span className="link">Gulshan-1, Dhaka-1230</span>
                    </li>
                    <li>
                      <span className="link">
                        Basaboo Raod, Khilgaon, Dhaka-1214
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <h2 className="title text-slate-100">Need Help?</h2>
                  <div className="contact-box">
                    <h5>Call us directly</h5>
                    <Link href={'tel:01627669222'} className="flex gap-2 items-center text-[#808080]">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_219_5167)">
                          <path
                            d="M18.3332 14.1004V16.6004C18.3341 16.8325 18.2866 17.0622 18.1936 17.2749C18.1006 17.4875 17.9643 17.6784 17.7933 17.8353C17.6222 17.9922 17.4203 18.1116 17.2005 18.186C16.9806 18.2603 16.7477 18.288 16.5165 18.2671C13.9522 17.9884 11.489 17.1122 9.32486 15.7087C7.31139 14.4293 5.60431 12.7222 4.32486 10.7087C2.91651 8.53474 2.04007 6.05957 1.76653 3.48374C1.7457 3.2533 1.77309 3.02104 1.84695 2.80176C1.9208 2.58248 2.03951 2.38098 2.1955 2.21009C2.3515 2.0392 2.54137 1.90266 2.75302 1.80917C2.96468 1.71569 3.19348 1.66729 3.42486 1.66707H5.92486C6.32928 1.66309 6.72136 1.80631 7.028 2.07002C7.33464 2.33373 7.53493 2.69995 7.59153 3.10041C7.69705 3.90046 7.89274 4.68601 8.17486 5.44207C8.28698 5.74034 8.31125 6.0645 8.24478 6.37614C8.17832 6.68778 8.02392 6.97383 7.79986 7.20041L6.74153 8.25874C7.92783 10.345 9.65524 12.0724 11.7415 13.2587L12.7999 12.2004C13.0264 11.9764 13.3125 11.8219 13.6241 11.7555C13.9358 11.689 14.2599 11.7133 14.5582 11.8254C15.3143 12.1075 16.0998 12.3032 16.8999 12.4087C17.3047 12.4658 17.6744 12.6697 17.9386 12.9817C18.2029 13.2936 18.3433 13.6917 18.3332 14.1004Z"
                            stroke="#808080"
                            strokeOpacity="0.8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                      01627-669222
                    </Link>
                  </div>
                  <div className="contact-box">
                    <h5>WhatsApp: Call & SMS</h5>
                    <Link
                      href={`https://wa.me/01710060020?text=${encodeURIComponent('Hello! I need help.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#808080] flex gap-2 items-center"
                    >
                      <FaWhatsapp />
                      017100-60020
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <div className=" border-t border-slate-800">
            <div className="small-footer py-[12px] container px-3 md:px-0 justify-center">
              <p className="text-gray text-center text-sm ">
                Copyright-2025 ©
                <span className="text-slate-300"> Shikderambulance</span>.
                Developed by <span className="text-slate-300">Shikder It Ltd</span>{" "}
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="icon icon1"
        height={180}
        width={212}
        alt="icon"
        src={"/images/icon/1.svg"}
      />
      <Image
        className="icon icon2"
        height={180}
        width={212}
        alt="icon"
        src={"/images/icon/2.svg"}
      />
      <Image
        className="icon icon3"
        height={180}
        width={212}
        alt="icon"
        src={"/images/icon/2.svg"}
      />
      <Image
        className="icon icon4"
        height={180}
        width={212}
        alt="icon"
        src={"/images/icon/3.svg"}
      />
    </div>
  );
};

export default MainFooter;
