import icon1 from "../../../../assets/HRStratigy/icon1.png";
import icon2 from "../../../../assets/HRStratigy/icon2.png";
import icon3 from "../../../../assets/HRStratigy/icon3.png";

const HRState = () => {
  return (
    <div className="lg:container lg:mx-auto lg:max-w-[1000px] mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 group bg-white shadow-2xl rounded-2xl">
        {/* Card 1 */}
        <div className="p-3 lg:p-5 flex flex-col items-center text-center group hover:bg-slate-50 cursor-pointer rounded-l-2xl lg:border-r-4">
          <img className="w-16" src={icon1} alt="" />

          <p className="text-xl font-medium text-slate-700 mt-3">
            Institutional Services
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Dedicated to igniting growth and innovation in businesses worldwide.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-3 lg:p-5 flex flex-col items-center text-center group hover:bg-slate-50 cursor-pointer rounded-l-2xl lg:border-r-4">
          <img className="w-16" src={icon2} alt="" />
          <p className="text-xl font-medium text-slate-700 mt-3">
            Professional Services
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Dedicated to igniting growth and innovation in businesses worldwide.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-3 lg:p-5 flex flex-col items-center text-center group hover:bg-slate-50 cursor-pointer rounded-r-2xl">
          <img className="w-16" src={icon3} alt="" />
          <p className="text-xl font-medium text-slate-700 mt-3">
            Opening Hours
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Dedicated to igniting growth and innovation in businesses worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HRState;
