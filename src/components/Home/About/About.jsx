import "./About.css";
import video from "../../../assets/about/video.mp4";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about">
      <div className="px-4 lg:container lg:mx-auto max-w-[1300px] py-10 lg:py-20">
        <div className="p-5 lg:p-[50px] rounded-md glass grid grid-cols-1 lg:grid-cols-2 gap-5">
          <video src={video} loop muted autoPlay className="rounded-lg"></video>
          <div className="mx-0 lg:mx-10">
            <h1 className=" hidden lg:block lg:text-4xl  font-[Inter] flex flex-col my-8">
              <span className="font-bold">360D Soul Ltd. is a</span>
              <span className="bg-clip-text text-[#0080E5]"> Foundational</span>
              <span className="font-bold"> Ecosystem</span>
            </h1>
            <h1 className="block lg:hidden text-2xl  my-4  font-[Inter]  ">
              <span className="font-bold">360D Soul Ltd. is a </span>
              <span className="bg-clip-text text-[#0080E5]"> Foundational</span>
              <span className="font-bold"> Ecosystem</span>
            </h1>
            <p className="text-[#4C4C4C] font-[24px] font-[Inter] text-justify">
              Dedicated to igniting growth and innovation in businesses
              worldwide. With a passionate team of experts, we offer strategic
              business development solutions tailored to unlock potential, drive
              success and foster enduring partnerships.
            </p>
            <Link to="/explore">
              <button className="font-semibold bg-gradient-to-r from-[#013762] via-[#0080E5] to-[#013762] text-white px-10 py-3 mt-3 lg:mt-8 rounded-md">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
