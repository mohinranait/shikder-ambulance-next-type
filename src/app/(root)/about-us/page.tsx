import AboutSection from "@/components/pages/home/AboutSection";

import React from "react";

export const metadata = {
  title: "About us | 24/7 Support",
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

const AboutPage = async () => {
  return (
    <>
      <AboutSection />
    </>
  );
};

export default AboutPage;
