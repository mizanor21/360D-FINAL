const PlanningPolicy = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="pt-20 pb-20">
        <h1 className="text-center text-5xl pt-5 pb-10 font-bold">
          Privacy & Policy
        </h1>
        <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px]">
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded border-t-4 border-indigo-500 hover:shadow-indigo">
              <div className="p-10">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <img
                    src="https://i.postimg.cc/sXgqMVtC/shield-1.png"
                    alt="Shield Icon"
                  />
                </div>
                <p className="mb-2 font-bold text-xl">Data Privacy Policy</p>
                <p className="text-md text-justify text-gray-900">
                  Define how personal and sensitive data is collected, used, and
                  protected to comply with regulations like GDPR and CCPA,
                  ensuring user trust and legal compliance.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>

            {/* Card 2 */}
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded border-t-4 border-blue-500  hover:shadow-blue ">
              <div className="p-10">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <img
                    src="https://i.postimg.cc/4yNcC075/shield-7.png"
                    alt="Shield Icon"
                  />
                </div>
                <p className="mb-2 font-bold text-xl">Disaster Recovery</p>
                <p className="text-md text-justify text-gray-900">
                  Outline procedures for restoring IT systems and data after
                  unexpected events, such as cyber-attacks or natural disasters,
                  to minimize downtime and business disruption.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>

            {/* Card 3 */}
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded border-t-4 border-green-500 hover:shadow-green">
              <div className="p-10">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <img
                    src="https://i.postimg.cc/d3xLbVKs/shield-8.png"
                    alt="Shield Icon"
                  />
                </div>
                <p className="mb-2 font-bold text-xl">Cloud Strategy</p>
                <p className="text-md text-justify text-gray-900">
                  Develop guidelines for leveraging cloud computing, including
                  selecting cloud service providers, managing costs, and
                  ensuring data security and scalability.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>

            {/* Card 4 */}
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded border-t-4 border-red-500 hover:shadow-red hover:shadow-2xl">
              <div className="p-10">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <img
                    src="https://i.postimg.cc/3wX0kh21/shield-9.png"
                    alt="Shield Icon"
                  />
                </div>
                <p className="mb-2 font-bold">IT Governance</p>
                <p className="text-sm text-justify text-gray-900">
                  Define how personal and sensitive data is collected, used, and
                  protected to comply with regulations like GDPR and CCPA,
                  ensuring user trust and legal compliance.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanningPolicy;
