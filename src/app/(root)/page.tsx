export const dynamic = "force-dynamic";
import AboutSection from "@/components/pages/home/AboutSection";
import BannerSection from "@/components/pages/home/BannerSection";
import Faq from "@/components/pages/home/Faq";
import FeatureSection from "@/components/pages/home/FeatureSection";
import Reviews from "@/components/pages/home/Reviews";
import ServiceFeature from "@/components/pages/home/ServiceFeature";
import ServicesSection from "@/components/pages/home/ServicesSection";
import WhyChooseMe from "@/components/pages/home/WhyChooseMe";

const Home = () => {
  return (
    <div className=" ">
      <BannerSection />
      <ServiceFeature />
      <ServicesSection />
      <AboutSection />
      <WhyChooseMe />
      <FeatureSection />
      <Reviews />
      {/* <FaqSection /> */}
      <Faq />
    </div>
  );
};

export default Home;
