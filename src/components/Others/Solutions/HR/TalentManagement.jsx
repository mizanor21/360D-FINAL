const TalentManagement = () => {
  return (
    <div>
      <div className=" px-4 lg:container lg:mx-auto lg:max-w-[1300px]">
        <h1 className="font-bold text-3xl lg:text-5xl text-center my-10 lg:my-20">
          Talent Management
        </h1>
        <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
          <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
            <div>
              <p className="mb-2 text-2xl lg:text-3xl font-semibold tracking-wide">
                Development
              </p>

              <p className="mb-6 text-base text-gray-700 md:text-lg lg:mt-8 text-justify">
                Talent development refers to the strategic process of
                identifying, nurturing, and enhancing the skills and abilities
                of employees to meet current and future organizational needs. It
                includes various activities such as training, mentoring, career
                planning, and succession.
              </p>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#00B4D8]"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
            <div>
              <p className="mb-2 text-2xl lg:text-3xl font-semibold tracking-wide">
                Optimization
              </p>

              <p className="mb-6 text-base text-gray-700 md:text-lg lg:mt-8 text-justify">
                Talent development refers to the strategic process of
                identifying, nurturing, and enhancing the skills and abilities
                of employees to meet current and future organizational needs. It
                includes various activities such as training, mentoring, career
                planning, and succession.
              </p>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#00B4D8]"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentManagement;
