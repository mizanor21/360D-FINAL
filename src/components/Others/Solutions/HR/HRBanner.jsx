import "./HRBanner.css";
import img1 from "../../../../assets/HRStratigy/img.png";
import HRState from "./HRState";

const HRBanner = () => {
  return (
    <div className="relative" id="hr-strategy">
      <div className="relative bgHr ">
        <div className="relative px-4 lg:container lg:mx-auto ">
          <div className="grid lg:grid-cols-2 items-center pt-10 lg:pt-28">
            <div className="">
              <h5 className="mb-4 text-3xl lg:text-6xl font-bold text-white">
                HR Strategy
              </h5>
              <p className="mb-6 text-white max-w-[600px]">
                Dedicated to igniting growth and innovation in businesses
                worldwide. With a passionate team of experts, we offer strategic
                business development solutions tailored to unlock potential,
                drive success and foster enduring partnerships. Let’s embark on
                a journey of transformation together.
              </p>
              <button className="btn text-white bg-[#00B4D8]">
                Learn More
              </button>
            </div>

            <div className="pt-20 ">
              <img src={img1} className="" alt="Marketing Strategy" />
            </div>
          </div>
        </div>
        <HRState />
      </div>
    </div>
  );
};

export default HRBanner;
