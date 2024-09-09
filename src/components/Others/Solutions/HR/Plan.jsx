import img1 from "../../../../assets/HRStratigy/plan.png";
import icon4 from "../../../../assets/HRStratigy/icon4.png";
import icon5 from "../../../../assets/HRStratigy/icon5.png";
import icon6 from "../../../../assets/HRStratigy/icon6.png";
const Plan = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#011423] via-[#032b48] to-[#012e50] py-20">
      <h2 className="text-3xl lg:text-5xl text-[#0075d1] font-bold text-center">
        GET YOUR PLAN & STRATEGY
      </h2>
      <img src={img1} alt="" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-32 bg-[#2b4055] text-white p-5 rounded-2xl  mt-5 lg:mt-10">
        <div className="flex items-center gap-3">
          <img className="w-10" src={icon4} alt="" />
          <h4 className="font-bold">
            Easy To Customize, <br /> Ready To Launch
          </h4>
        </div>
        <div className="flex items-center gap-3">
          <img className="w-10" src={icon5} alt="" />
          <h4 className="font-bold">
            Easy To Customize, <br /> Ready To Launch
          </h4>
        </div>
        <div className="flex items-center gap-3">
          <img className="w-10" src={icon6} alt="" />
          <h4 className="font-bold">
            Easy To Customize, <br /> Ready To Launch
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Plan;
