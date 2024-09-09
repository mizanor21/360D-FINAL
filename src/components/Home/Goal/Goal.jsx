import "./Goal.css";
import rocket from "../../../assets/goal/rocket.png";
import astronaut1 from "../../../assets/goal/astronaut1.png";
import astronaut2 from "../../../assets/goal/astronaut2.png";
import blue from '../../../assets/goal/Vector.png'

const Goal = () => {
  return (
    <div className=" hidden lg:block goal">
      <div className="mx-5 lg:container lg:mx-auto lg:max-w-[1300px] grid grid-cols-1 md:grid-cols-2  gap-10 py-20 font-['Inter']">
        <div className="flex justify-center items-center text-center md:text-left">
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-[#013762] via-[#0080E5] bg-clip-text text-transparent">
              Company Goal
            </div>
            <div className="flex justify-center md:justify-start mt-[18px] mb-[40px]">
              <span className="border-[3px] border-[#00B4D8] w-[25px]"></span>
              <span className="border-[3px] border-[#0077B6] w-[30px]"></span>
              <span className="border-[3px] border-[#03045E] w-[35px]"></span>
            </div>
            <p className="text-justify  mx-auto">
              360D SOUL is more than a business development firm, ensuring your
              business growth and partnership. Expertise and passion, we craft
              tailored solutions to elevate your business to new heights. Let’s
              collaborate, innovate, and thrive together in the ever-evolving
              landscape of success.
            </p>
          </div>
        </div>

        <div className="bg vision">
          <div className="flex flex-col">
            <div className="flex justify-end">
              <div className="mr-5">
                <img
                  src={rocket}
                  alt="Rocket Icon"
                  className="w-16 h-auto mb-4"
                />
                <h2 className="text-3xl font-bold mb-4">Vision</h2>
              </div>
            </div>
            <div className="flex justify-end items-end">
              <div className="text-gray-700 font-[Inter] text-[17px] shadow-2xl bg-white w-[500px] flex justify-end lg:rounded-tl-[100px] rounded-md p-3 leading-relaxed text-justify">
                <p className="lg:w-[250px]">
                  The premier Sourcing and Organizational Development (OD)
                  platform, setting the standard for excellence in our industry
                  worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg values">
          <div className="flex flex-col">
            <div className="flex justify-end">
              <div className="mr-5">
                <img
                  src={astronaut2}
                  alt="Astronaut Icon"
                  className="w-16 h-auto mb-4"
                />
                <h2 className="text-3xl font-bold mb-4">Values</h2>
              </div>
            </div>
            <div className="flex justify-end items-end">
              <div className="text-gray-700 font-[Inter] text-[17px] shadow-2xl bg-white w-[500px] flex justify-end lg:rounded-tl-[100px] rounded-md p-3 leading-relaxed text-justify">
                <p className="lg:w-[250px]">
                  Offers comprehensive, cost-effective solutions for businesses
                  of all types, from established enterprises to emerging
                  startups.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg mission">
          <div className="flex flex-col">
            <div className="flex justify-end">
              <div className="mr-5">
                <img
                  src={astronaut1}
                  alt="Astronaut Icon"
                  className="w-16 h-auto mb-4"
                />
                <h2 className="text-3xl font-bold mb-4">Mission</h2>
              </div>
            </div>
            <div className="flex justify-end items-end">
              <div className="text-gray-700 font-[Inter] text-[17px] shadow-2xl bg-white w-[500px] flex justify-end lg:rounded-tl-[100px] rounded-md p-3 leading-relaxed text-justify">
                <p className="lg:w-[250px]">
                  Our mission is to provide user-friendly, high-quality
                  resourcing solutions that are trusted, dynamic, and rooted in
                  local expertise, while simultaneously.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex relative">
  <img src={blue} className="w-[400px] z-[40]" alt="" />
  <div className="flex flex-col absolute left-[220px] z-[39]">
    <div className="flex justify-end">
      <div className="mr-5">
        <img
          src={astronaut1}
          alt="Astronaut Icon"
          className="w-16 h-auto mb-4 z-[101]"
        />
        <h2 className="text-3xl font-bold mb-4">Mission</h2>
      </div>
    </div>
    <div className="flex">
      <div className="text-gray-700 font-[Inter] text-[17px] shadow-2xl bg-white flex justify-end lg:rounded-tl-[100px] rounded-md px-10 py-5 leading-relaxed text-justify">
        <p>
          Our mission is to provide user-friendly, high-quality resourcing solutions that are trusted, dynamic, and rooted in local expertise, while simultaneously.
        </p>
      </div>
    </div>
  </div>
</div>

<div className="flex relative">
  <img src={blue} className="w-[400px] z-[40]" alt="" />
  <div className="flex flex-col absolute left-[220px] z-[39]">
    <div className="flex justify-end">
      <div className="mr-5">
        <img
          src={astronaut1}
          alt="Astronaut Icon"
          className="w-16 h-auto mb-4 z-[101]"
        />
        <h2 className="text-3xl font-bold mb-4">Mission</h2>
      </div>
    </div>
    <div className="flex">
      <div className="text-gray-700 font-[Inter] text-[17px] shadow-2xl bg-white flex justify-end lg:rounded-tl-[100px] rounded-md px-10 py-5 leading-relaxed text-justify">
        <p>
          Our mission is to provide user-friendly, high-quality resourcing solutions that are trusted, dynamic, and rooted in local expertise, while simultaneously.
        </p>
      </div>
    </div>
  </div>
</div>
<div className="flex relative">
  <img src={blue} className="w-[400px] z-[40]" alt="" />
  <div className="flex flex-col absolute left-[220px] z-[39]">
    <div className="flex justify-end">
      <div className="mr-5">
        <img
          src={astronaut1}
          alt="Astronaut Icon"
          className="w-16 h-auto mb-4 z-[101]"
        />
        <h2 className="text-3xl font-bold mb-4">Mission</h2>
      </div>
    </div>
    <div className="flex">
      <div className="text-gray-700 font-[Inter] text-[17px] shadow-2xl bg-white flex justify-end lg:rounded-tl-[100px] rounded-md px-10 py-5 leading-relaxed text-justify">
        <p>
          Our mission is to provide user-friendly, high-quality resourcing solutions that are trusted, dynamic, and rooted in local expertise, while simultaneously.
        </p>
      </div>
    </div>
  </div>
</div>
<div className="flex relative">
  <img src={blue} className="w-[400px] z-[40]" alt="" />
  <div className="flex flex-col absolute left-[220px] z-[39]">
    <div className="flex justify-end">
      <div className="mr-5">
        <img
          src={astronaut1}
          alt="Astronaut Icon"
          className="w-16 h-auto mb-4 z-[101]"
        />
        <h2 className="text-3xl font-bold mb-4">Mission</h2>
      </div>
    </div>
    <div className="flex">
      <div className="text-gray-700 font-[Inter] text-[17px] shadow-2xl bg-white flex justify-end lg:rounded-tl-[100px] rounded-md px-10 py-5 leading-relaxed text-justify">
        <p>
          Our mission is to provide user-friendly, high-quality resourcing solutions that are trusted, dynamic, and rooted in local expertise, while simultaneously.
        </p>
      </div>
    </div>
  </div>
</div> */}
      </div>
    </div>
  );
};

export default Goal;
