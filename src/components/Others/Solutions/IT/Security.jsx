import "./Security.css";
const Security = () => {
  return (
    <div className="bg-gradient-to-r from-[#082d50] via-[#1f507b] to-[#407ca7] py-14 font-[Inter]">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:container lg:mx-auto lg:max-w-[1300px]">
        <div>
          <img
            src="https://i.postimg.cc/3rk38DzB/Pngtree-cyber-security-system-technology-landing-14868800-1.png"
            className="w-[600px]"
          ></img>
        </div>
        <div>
          <section className="flex items-center h-full">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <h1 className="text-white font-bold text-3xl ml-6  lg:text-5xl">
                Integrated Security
              </h1>
              <div className="px-5 mt-12">
                <div className="grid grid-cols-1 gap-3 lg:gap-5 sm:grid-cols-1 mt-100">
                  <div className="flex items-start">
                    <img src="https://i.postimg.cc/RZycYfrD/Rectangle-114.png"></img>
                    <div className="ml-5">
                      <h3 className="text-lg font-bold text-white">
                        Comprehensive Threat Detection
                      </h3>
                      <p className="mt-4 text-base text-gray-200">
                        Integrates multiple security tools to identify and
                        respond to threats across various attack vectors.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <img src="https://i.postimg.cc/1zFp1ts5/Rectangle-115.png"></img>
                    <div className="ml-5">
                      <h3 className="text-lg font-bold text-white">
                        Unified Policy Management
                      </h3>
                      <p className="mt-4 text-base text-gray-200">
                        Centralizes security policy enforcement across the
                        entire IT environment, ensuring consistency and reducing
                        management complexity.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <img src="https://i.postimg.cc/P5PWKy7D/Rectangle-116.png"></img>
                    <div className="ml-5">
                      <h3 className="text-lg font-bold text-white">
                        Automated Incident Response
                      </h3>
                      <p className="mt-4 text-base text-gray-200">
                        Utilizes automation to swiftly react to security
                        incidents, minimizing potential damage and reducing
                        response time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Security;
