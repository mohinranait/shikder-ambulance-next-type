import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainFooter = () => {
  return (
    <div className="footer-wrapper">
      <div className="innerbg">
        <div className="inner-wrapper">
          <div className="container">
            <div className="section-title white pb-[30px] lg:pb-[60px]">
              <h1 className="text-white">
                Get More Update! Subscribe Newsletter{" "}
              </h1>
              <p className="text-white">
                Join us today and experience the power of AI-powered text
                creation for yourself!
              </p>
              {/* <Subscribe /> */}
            </div>

            <footer className="footer-link">
              <div className="grid grid-cols-4 gap-12">
                <div className="col-span-2 lg:col-span-1">
                  <h2 className="title">Social Media</h2>
                  <ul className="link-list">
                    <li>
                      <Link className="link" href={"/"}>
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link className="link" href={"/"}>
                        LinkedIn
                      </Link>
                    </li>
                    <li>
                      <Link className="link" href={"/"}>
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <Link className="link" href={"/"}>
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link className="link" href={"/"}>
                        Tiktok
                      </Link>
                    </li>
                    <li>
                      <Link className="link" href={"/"}>
                        YouTube
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <h2 className="title">Links</h2>
                  <ul className="link-list">
                    <li>
                      <Link className="link" href={"/privacy-policy"}>
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="link" href={"/terms-condition"}>
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link className="link" href={"/"}>
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <h2 className="title">Resources</h2>
                  <ul className="link-list">
                    <li>
                      <Link className="link" href={"/"}>
                        AI Transcript
                      </Link>
                    </li>
                    <li>
                      <Link className="link" href={"/"}>
                        AI Summaries
                      </Link>
                    </li>
                    <li>
                      <Link className="link" href={"/"}>
                        AI Podcast
                      </Link>
                    </li>
                    <li>
                      <Link className="link" href={"/"}>
                        AI Social Media Post
                      </Link>
                    </li>
                    <li>
                      <Link className="link" href={"/"}>
                        AI Articles
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <h2 className="title">Need Help?</h2>
                  <div className="contact-box">
                    <h5>Call us directly</h5>
                    <h2>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_219_5167)">
                          <path
                            d="M18.3332 14.1004V16.6004C18.3341 16.8325 18.2866 17.0622 18.1936 17.2749C18.1006 17.4875 17.9643 17.6784 17.7933 17.8353C17.6222 17.9922 17.4203 18.1116 17.2005 18.186C16.9806 18.2603 16.7477 18.288 16.5165 18.2671C13.9522 17.9884 11.489 17.1122 9.32486 15.7087C7.31139 14.4293 5.60431 12.7222 4.32486 10.7087C2.91651 8.53474 2.04007 6.05957 1.76653 3.48374C1.7457 3.2533 1.77309 3.02104 1.84695 2.80176C1.9208 2.58248 2.03951 2.38098 2.1955 2.21009C2.3515 2.0392 2.54137 1.90266 2.75302 1.80917C2.96468 1.71569 3.19348 1.66729 3.42486 1.66707H5.92486C6.32928 1.66309 6.72136 1.80631 7.028 2.07002C7.33464 2.33373 7.53493 2.69995 7.59153 3.10041C7.69705 3.90046 7.89274 4.68601 8.17486 5.44207C8.28698 5.74034 8.31125 6.0645 8.24478 6.37614C8.17832 6.68778 8.02392 6.97383 7.79986 7.20041L6.74153 8.25874C7.92783 10.345 9.65524 12.0724 11.7415 13.2587L12.7999 12.2004C13.0264 11.9764 13.3125 11.8219 13.6241 11.7555C13.9358 11.689 14.2599 11.7133 14.5582 11.8254C15.3143 12.1075 16.0998 12.3032 16.8999 12.4087C17.3047 12.4658 17.6744 12.6697 17.9386 12.9817C18.2029 13.2936 18.3433 13.6917 18.3332 14.1004Z"
                            stroke="white"
                            strokeOpacity="0.8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_219_5167">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      +123 456 76543
                    </h2>
                  </div>
                  <div className="contact-box">
                    <h5>Call us directly</h5>
                    <h2>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_219_5167)">
                          <path
                            d="M18.3332 14.1004V16.6004C18.3341 16.8325 18.2866 17.0622 18.1936 17.2749C18.1006 17.4875 17.9643 17.6784 17.7933 17.8353C17.6222 17.9922 17.4203 18.1116 17.2005 18.186C16.9806 18.2603 16.7477 18.288 16.5165 18.2671C13.9522 17.9884 11.489 17.1122 9.32486 15.7087C7.31139 14.4293 5.60431 12.7222 4.32486 10.7087C2.91651 8.53474 2.04007 6.05957 1.76653 3.48374C1.7457 3.2533 1.77309 3.02104 1.84695 2.80176C1.9208 2.58248 2.03951 2.38098 2.1955 2.21009C2.3515 2.0392 2.54137 1.90266 2.75302 1.80917C2.96468 1.71569 3.19348 1.66729 3.42486 1.66707H5.92486C6.32928 1.66309 6.72136 1.80631 7.028 2.07002C7.33464 2.33373 7.53493 2.69995 7.59153 3.10041C7.69705 3.90046 7.89274 4.68601 8.17486 5.44207C8.28698 5.74034 8.31125 6.0645 8.24478 6.37614C8.17832 6.68778 8.02392 6.97383 7.79986 7.20041L6.74153 8.25874C7.92783 10.345 9.65524 12.0724 11.7415 13.2587L12.7999 12.2004C13.0264 11.9764 13.3125 11.8219 13.6241 11.7555C13.9358 11.689 14.2599 11.7133 14.5582 11.8254C15.3143 12.1075 16.0998 12.3032 16.8999 12.4087C17.3047 12.4658 17.6744 12.6697 17.9386 12.9817C18.2029 13.2936 18.3433 13.6917 18.3332 14.1004Z"
                            stroke="white"
                            strokeOpacity="0.8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_219_5167">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      +123 456 76543
                    </h2>
                  </div>
                </div>
              </div>
            </footer>
            <div className="small-footer">
              <p className="text-gray ">
                copyright 2024 All rights reserved by Shikder ambulance
              </p>
              <ul>
                <li>
                  <Link href={"/"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={"/"}>Terms & Condition</Link>
                </li>
              </ul>
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
