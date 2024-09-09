import "./PMISKPI.css";

const PMISKPI = () => {
  return (
    <div>
      <div>
        <section className=" lg:mt-20 mb-20 border-t-2">
          <div className="px-4 lg:container lg:mx-auto lg:max-w-[1400px]">
            <div className="grid items-center grid-cols-1  md:grid-cols-2 ">
              <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
                <div className="relative w-full max-w-md mt-4 mb-10">
                  <img
                    className=""
                    src="https://i.postimg.cc/dQmJwt1h/14-Converted-1.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl mb-4">
                  Grow business with <br></br>{" "}
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0080E5] via-[#0059A0] to-[#0059A0]">
                    PMIS & KPI
                  </span>
                </h2>
                <div className="text-justify">
                  <p>
                    A performance management system is a structured process used
                    by organizations to assess, monitor, and enhance employee
                    performance, aligning individual contributions with
                    organizational goals. Key Performance Indicators (KPIs) are
                    specific, measurable metrics used within this system to
                    evaluate the effectiveness and success of employees actions
                    in achieving their targets and overall objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PMISKPI;
