import AboutSection from "@/components/pages/home/AboutSection";
import BannerSection from "@/components/pages/home/BannerSection";
import FaqSection from "@/components/pages/home/FaqSection";
import FeatureSection from "@/components/pages/home/FeatureSection";
import Reviews from "@/components/pages/home/Reviews";
import ServicesSection from "@/components/pages/home/ServicesSection";

const Home = () => {
  return (
    <div className=" ">
      <BannerSection />
      <ServicesSection />
      <AboutSection />
      <FeatureSection />
      <Reviews />
      <FaqSection />
    </div>
  );
};

export default Home;
