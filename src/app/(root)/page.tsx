export const dynamic = "force-dynamic";
import AboutSection from "@/components/pages/home/AboutSection";
import BannerSection from "@/components/pages/home/BannerSection";
import Faq from "@/components/pages/home/Faq";
import FeatureSection from "@/components/pages/home/FeatureSection";
import Reviews from "@/components/pages/home/Reviews";
import ServiceFeature from "@/components/pages/home/ServiceFeature";
import ServicesSection from "@/components/pages/home/ServicesSection";
import StaticContent from "@/components/pages/home/StaticContent";
import WhyChooseMe from "@/components/pages/home/WhyChooseMe";
import ContactForm from "@/components/utils/ContactForm";
export const metadata = {
  title: "Shikder Ambulance Service in Dhaka | 24/7 Support",
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

const Home = () => {
  return (
    <div className=" ">
      <BannerSection />
      <ServiceFeature />
      <ServicesSection />
      <AboutSection />
      <WhyChooseMe />
      <ContactForm />
      <StaticContent />
      <FeatureSection />
      <Reviews />
      {/* <FaqSection /> */}
      <Faq />
    </div>
  );
};

export default Home;
