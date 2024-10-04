import AboutSection from "@/components/pages/home/AboutSection";
import BannerSection from "@/components/pages/home/BannerSection";
import FaqSection from "@/components/pages/home/FaqSection";
import FeatureSection from "@/components/pages/home/FeatureSection";
import Reviews from "@/components/pages/home/Reviews";
import ServicesSection from "@/components/pages/home/ServicesSection";
import ThemeToggle from "@/components/ThemeToggle";

const Home = () => {
  return (
    <div className=" ">
      <BannerSection />
      <ServicesSection />
      <AboutSection />
      <FeatureSection />
      <Reviews />
      <FaqSection />
      <section>
        <div className="container bg-yellow-600">asdf</div>
      </section>
      <ThemeToggle />
      <h1 className="text-2xl text-yellow-600 bg-gray-600 ">Next UI</h1>
    </div>
  );
};

export default Home;
