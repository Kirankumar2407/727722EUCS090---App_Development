import AboutUsCard from "../components/AboutUsCard";
import { aboutUsData } from "../utils/aboutUsData";
import HomeNavbar from "../components/HomeNavbar";

const AboutUs = () => {
  return (
    <div id="about-us" className="h-screen flex flex-col justify-center items-center ">
            <HomeNavbar/>

      <h2 className="text-4xl font-bold mb-8 text-black text-center">About Us</h2>
      <div className="flex flex-wrap justify-center max-w-6xl">
        {aboutUsData.slice(0, 6).map((item, index) => (
          <div className="m-4 flex-grow min-w-[300px] max-w-[400px] transition-transform transform hover:scale-105 shadow-lg">
            <AboutUsCard key={index} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;