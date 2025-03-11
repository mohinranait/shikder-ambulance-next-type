import AboutSection from "@/components/pages/home/AboutSection";

import React from "react";

export const metadata = {
  title: "About Us: Shikder Ambulance",
  description:
    "About Us: Shikder Ambulance is the best Ambulance Company in Bangladesh. We provide the different types of Ambulances in the all districts of Bangladesh. 24 Hours Ambulance Support is Available.",
  keywords: ["About Us", "ambulance service", "emergency ambulance", "Dhaka ambulance", "best ambulance", "Shikder Ambulance"],
  openGraph: {
    title: "Best Ambulance Service in Dhaka | 24/7 Support",
    description: "We provide 24/7 emergency ambulance service in Dhaka.",
    url: "https://shikderambulance.com",
    siteName: "Shikder Ambulance",
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

const AboutPage = async () => {
  return (
    <>
      <AboutSection />
    </>
  );
};

export default AboutPage;
