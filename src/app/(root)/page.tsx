import BannerSection from "@/components/pages/home/BannerSection";
import ThemeToggle from "@/components/ThemeToggle";

const Home = () => {
  return (
    <div className=" ">
      <BannerSection />
      <ThemeToggle />
      <h1 className="text-2xl text-yellow-600 bg-gray-600 ">Next UI</h1>
    </div>
  );
};

export default Home;
