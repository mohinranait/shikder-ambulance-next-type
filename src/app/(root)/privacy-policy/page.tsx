import TypesOfAmbulance from "@/components/utils/TypesOfAmbulance";
import Link from "next/link";
import React from "react";
const PrivacyPolicy = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container py-16 ">
          <h1 className="text-white mb-2 text-4xl font-semibold text-center">
            Privacy Policy: Shikder Ambulance Service
          </h1>
          <p className="text-center text-slate-300">
            Privacy Policy of Shikder Ambulance Company. We provide different
            types of Ambulances with Trusted. You can Ambulance booking with 100%
            Trust. We are always ready to service to you.
          </p>
          <ul className="flex items-center gap-2 pt-2 justify-center">
            <li>
              <Link href="/" className="font-medium text-base text-slate-200">
                Home
              </Link>
            </li>
            <li className="font-medium text-base text-slate-200">/</li>
            <li className="font-medium text-base text-slate-200">
              Privacy Policy
            </li>
          </ul>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <h2 className="text-center text-4xl font-bold mb-3">
            {" "}
            Privacy Policy{" "}
          </h2>
          <p className="text-center ">
            {" "}
            100% Secure & Trusted company{" "}
          </p>
          <div className=" space-y-3 pt-5">
            <div>
              <h3 className=" text-xl font-bold">
                The Privacy Policy Shikder Ambulance
              </h3>
              <p>
                The privacy Policy is strong of Shikder Ambulance company
                is largest and trusted company. When you visit this sites then
                you will be looked this company Privacy Policy.
              </p>
            </div>
            <div>
              <h3 className=" text-xl font-bold">
                Suggested text
              </h3>
              <p>
                Our website address is https://shikderambulance.com
              </p>
            </div>
            <div>
              <h3 className=" text-xl font-bold">
                Comments
              </h3>
              <p>
                <b>Suggested text: </b> When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor is IP address and browser user agent string to help spam detection.
              </p>
            </div>
            <div>
              <h3 className=" text-xl font-bold">
                Media
              </h3>
              <p>
                <b>Suggested text: </b>  If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
              </p>
            </div>
            <div>
              <h3 className=" text-xl font-bold">
                Cookies
              </h3>
              <p>
                <b>Suggested text: </b> If you leave a comment on our site you may opt-in to saving your name, email address, and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year. <br /> <br />

                If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.  <br /> <br />

                When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.  <br /> <br />

                If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TypesOfAmbulance />

      <section className="py-10">
        <div className="container">
          <h2 className="text-center text-2xl font-bold">
            About Shikder Ambulance Service
          </h2>
          <p className="text-center">
            Emergency <a href="http://rentsheba.com" target="_blank" rel="noopener noreferrer">Ambulance service</a> in Bangladesh.
          </p>
          <div className=" mt-5">
            <div className="mb-4">
              <h3 className="font-bold text-xl mb-2"> Embedded content from other Websites </h3>
              <p > <b>Suggested text:</b> Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. <br />
                These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold text-xl mb-2">Who do we share your data with </h3>
              <p> <b>Suggested text:</b> If you request a password reset, your IP address will be included in the reset email.
              </p>
            </div>
          </div>


          <div className="mb-4">
            <h3 className="font-bold text-xl mb-2">How long we retain your data</h3>
            <p> <b>Suggested text:</b> If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.  <br />
              For users who register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-xl mb-2">What rights do you have over your data?</h3>
            <p><b>Suggested text:</b> If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes. </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Where do we send your data? </h3>
            <p><b>Suggested text:</b> Visitor comments may be checked through an automated spam detection service. </p>
          </div>
        </div>
      </section >
    </>
  );
};

export default PrivacyPolicy;
