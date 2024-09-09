const CoreITService = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="pt-20 pb-20">
        <h1 className="text-center text-3xl lg:text-5xl pt-5 pb-10 font-bold">
          Our Core IT Services
        </h1>
        <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px]">
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded  group hover:shadow-2xl border-t-4 border-indigo-500 ">
              <div className="p-10">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <img
                    src="https://i.postimg.cc/sXgqMVtC/shield-1.png"
                    alt="Shield Icon"
                  />
                </div>
                <p className="mb-2 font-bold text-xl">Managed IT Services:</p>
                <p className="text-md text-justify text-gray-900">
                  Comprehensive management of your IT infrastructure, including
                  monitoring, maintenance, and support.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>

            {/* Card 2 */}
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded  group hover:shadow-2xl border-t-4 border-blue-500">
              <div className="p-10">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <img
                    src="https://i.postimg.cc/4yNcC075/shield-7.png"
                    alt="Shield Icon"
                  />
                </div>
                <p className="mb-2 font-bold text-xl">Cloud Solutions</p>
                <p className="text-md text-justify text-gray-900">
                  Migration, management, and optimization of cloud environments
                  to boost scalability and performance.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>

            {/* Card 3 */}
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded  group hover:shadow-2xl border-t-4 border-green-500">
              <div className="p-10">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <img
                    src="https://i.postimg.cc/d3xLbVKs/shield-8.png"
                    alt="Shield Icon"
                  />
                </div>
                <p className="mb-2 font-bold text-xl">Cybersecurity Services</p>
                <p className="text-md text-justify text-gray-900">
                  Advanced protection for your data and systems with security
                  audits, threat detection, and incident response.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>

            {/* Card 4 */}
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded group hover:shadow-2xl border-t-4 border-red-500">
              <div className="p-10">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <img
                    src="https://i.postimg.cc/3wX0kh21/shield-9.png"
                    alt="Shield Icon"
                  />
                </div>
                <p className="mb-2 font-bold text-xl">
                  Data Backup and Recovery
                </p>
                <p className="text-sm text-justify text-gray-900">
                  Reliable data backup strategies and recovery solutions to
                  ensure business continuity.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>

            {/* Card 5 */}
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded  group hover:shadow-2xl border-t-4 border-orange-500">
              <div className="p-10">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <img
                    src="https://i.postimg.cc/3wX0kh21/shield-9.png"
                    alt="Shield Icon"
                  />
                </div>
                <p className="mb-2 font-bold text-xl">IT Consulting</p>
                <p className="text-sm text-justify text-gray-900">
                  Expert advisory services to align your IT strategy with
                  business goals, driving innovation and growth.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>

            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded  group hover:shadow-2xl border-t-4 border-gray-500">
              <div className="p-10">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <img
                    src="https://i.postimg.cc/3wX0kh21/shield-9.png"
                    alt="Shield Icon"
                  />
                </div>
                <p className="mb-2 font-bold text-xl">Network Solutions</p>
                <p className="text-sm text-justify text-gray-900">
                Optimize your network infrastructure with our network solutions, designed to enhance connectivity, performance, and reliability
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>

            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded  group hover:shadow-2xl border-t-4 border-purple-500">
              <div className="p-10">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <img
                    src="https://i.postimg.cc/3wX0kh21/shield-9.png"
                    alt="Shield Icon"
                  />
                </div>
                <p className="mb-2 font-bold text-xl">IT Infrastructure</p>
                <p className="text-sm text-justify text-gray-900">
                Build a robust IT infrastructure with our infrastructure services, including hardware procurement, installation, and configuration.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>

            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded  group hover:shadow-2xl border-t-4 border-pink-500">
              <div className="p-10">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <img
                    src="https://i.postimg.cc/3wX0kh21/shield-9.png"
                    alt="Shield Icon"
                  />
                </div>
                <p className="mb-2 font-bold text-xl">Software Development</p>
                <p className="text-sm text-justify text-gray-900">
                Our software development services focus on creating customized applications and solutions tailored to your specific business needs.
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

export default CoreITService;
