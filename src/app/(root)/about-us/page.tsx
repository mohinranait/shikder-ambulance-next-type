import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AboutSection from "@/components/pages/home/AboutSection";
import { getServerSession } from "next-auth";
import React from "react";

const AboutPage = async () => {
  const auth = await getServerSession(authOptions);
  console.log("auth", auth);

  return (
    <>
      <AboutSection />
    </>
  );
};

export default AboutPage;
