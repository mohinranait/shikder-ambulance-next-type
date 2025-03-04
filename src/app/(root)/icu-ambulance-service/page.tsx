import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
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
  return (
    <>
      <section className=" mb-6 bg-[#dfdffff7] bg-right-bottom overflow-hidden relative ">
        <span className="flex w-[300px] bg-primary-mute h-[200px] top-1/2 left-1/2 bg-opacity-10 -translate-y-1/2 -translate-x-1/2 backdrop-blur-2xl absolute"></span>
        <span className="flex w-[300px] bg-secondary h-[200px] top-1/2 left-1/2 mt-8 bg-opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 backdrop-blur-2xl absolute"></span>
        <div className=" bg-opacity-50 backdrop-blur-[100px]">
          <div className="container py-10 xl:min-h-[500px] 2xl:min-h-[600px] flex items-center justify-center">
            <div className="">
              <h1 className="text-3xl mb-3 sm:leading-[80px] sm:text-4xl dark:text-white md:text-6xl text-black font-semibold text-center">
                Basic Life Support ICU Ambulance Service in Dhaka, Bangladesh
                <br />
                <span className=" font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                  The Best Reliable 24/7
                </span>{" "}
              </h1>
              <p className="text-base text-black text-center dark:text-white">
                Basic Life Support ICU Ambulance Service in Dhaka, Bangladesh.
                We Provide Life support ICU Ambulance, CCU Ambulance, and NICU
                Ambulance Service With Doctors or brother in Cheap Cost. We Are
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
          <h2 className="text-center text-2xl md:text-4xl font-bold ">
            ICU Ambulance Service in Dhaka
          </h2>
          <div>
            <h3 className=" text-2xl font-semibold mb-3">
              ICU Ambulance service in Bangladesh
            </h3>
            <p>
              The basic life support ICU Ambulance service in Dhaka, Bangladesh.
              ICU Ambulance service is one of the leading 24x7 Emergency
              Ambulance Services providers in Dhaka, Bangladesh. ICU Ambulance
              is one of the leading 24x7 Emergency Ambulance Services providers
              in Dhaka, Bangladesh. For every emergency cases transferring and
              also critically ill patients to Hospitals or Nursiing Homes. ICU
              Ambulance designed keeping in mind the space requirement of
              patients so as to easily fit the patient. All the staffs are
              Skilled and Trained in medical equipment. ICU Ambulance Service in
              Dhaka, Bangladesh. We Provide Life support ICU, CCU, NICU
              Ambulance Service With Doctors or brother in Cheap Cost, so
              Contact us
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-2 mt-5">
            <div>
              <Image
                src={"/images/ambulnace.jpg"}
                width={500}
                height={400}
                alt="Ac Ambulance Service"
              />
            </div>
            <div>
              <Image
                src={"/images/ambulnace.jpg"}
                width={500}
                height={400}
                alt="Ac Ambulance Service"
              />
            </div>
          </div>
        </div>
        <div className="container mb-4">
          <h3 className=" text-2xl font-semibold mb-3 ">
            Basic Life Support ICU Ambulance
          </h3>
          <p>
            Life Support ICU Ambulance Service or ICU Ambulance is most
            important for emergency patients. We provide doctors with Life
            support ambulance. We provide Online Ambulance Service! Online
            Ambulance Service is a prominent name for maintaining its impeccable
            service throughout the entire Bangladesh. This company provide any
            kind of EMERGENCY/URGENT ambulance service to the people with severe
            illness or pregnancy.
          </p>
          <p>
            Online Ambulance Service will securely transport the patients to any
            hospital, anywhere in Bangladesh within your budget. We also have
            Freezer Van ambulances to safely carry the dead bodies in unchanged
            condition. Have a look at different types of ambulance service we
            provide.
          </p>
        </div>

        <div className="container grid md:grid-cols-2 gap-3">
          <div>
            <h3 className="text-xl font-semibold ">
              Emergency ICU Ambulance in Dhaka
            </h3>
            <p>
              Life support emergency Icu Ambulance service in Dhaka. We provide
              different types of life support ambulance with doctors or
              brothers. We are always ready to provide ICU Ambulance service in
              Dhaka, Dhanmondi ICU Ambulance service, Gulshan ICU Ambulance
              service is available. 24/7 life support Ambulance is available.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold ">
              Cardiac Support Ambulance (CCU)
            </h3>
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
          <h3 className="text-xl font-semibold mb-2">
            Why should you choose us?
          </h3>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              <p>
                Ambulance Quality: We have three different types of ambulance
                and expert teams.
              </p>
            </li>
            <li>
              <p>
                Patient Care: Our ambulances are well equipped with all the
                necessary equipment.
              </p>
            </li>
            <li>
              <p>
                Professional Service: Our teams are well-trained and they always
                maintain their professionalism. No matter what happens around,
                patients are their utmost priority.
              </p>
            </li>
            <li>
              <p>
                Available 24/7: Our services are available at any time, any day.
                We are open twenty-four hours a day, seven-days a week. Contact
                on our emergency number. We are just a call away.
              </p>
            </li>
          </ul>
        </div>

        <div className="container">
          <h3 className="text-xl font-semibold mb-2">
            Why We are the best to the people?
          </h3>
          <div className="space-y-2">
            <p>
              Choosing our Life Support Ambulance Service is an excellent
              decision for several compelling reasons. First and foremost, our
              service is dedicated to providing the highest level of medical
              care and support to patients in need. Our ambulances are equipped
              with advanced medical equipment, including cardiac monitors,
              ventilators, defibrillators, and medication administration
              capabilities, ensuring that critical patients receive immediate
              and appropriate medical interventions during transportation. Our
              highly trained and experienced paramedics are adept at handling
              complex medical situations and are committed to delivering the
              best possible care to our patients.
            </p>

            <p>
              Secondly, we prioritize rapid response and efficient transport.
              Time is of the essence in emergency medical situations, and our
              service is designed to minimize response times and swiftly reach
              the patients location. We have a well-coordinated dispatch system
              and strategically positioned ambulances to ensure prompt
              assistance when every second counts. Additionally, our paramedics
              undergo regular training to stay updated on the latest protocols
              and techniques, enabling them to provide expedited and efficient
              transportation to the nearest appropriate medical facility.
            </p>

            <p>
              Furthermore, patient safety is our utmost priority. We adhere to
              strict safety standards and protocols, maintaining a rigorous
              maintenance schedule for our ambulances and regularly inspecting
              and testing our medical equipment to ensure optimal functionality.
              Our focus on patient comfort and well-being means that our
              ambulances are equipped with features such as adjustable
              stretchers, climate control, and appropriate restraints, ensuring
              a safe and comfortable journey for patients.
            </p>

            <p>
              Finally, we take pride in our commitment to compassionate care. We
              understand that medical emergencies can be highly stressful and
              emotional for patients and their loved ones. Our paramedics
              receive specialized training in empathy and bedside manner,
              providing reassurance and support to patients throughout the
              transportation process. We strive to create a calm and
              compassionate environment, fostering trust and confidence in our
              patients during their time of need.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ICUAmbulance;
