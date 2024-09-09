import "./ITServiceChoose.css";
const ITServiceChoose = () => {
  return (
    <div className="bg-gradient-to-r from-[#00172d] via-[#002d5f] to-[#004dad] py-14 ">
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
              <h1 className="text-white font-bold text-3xl lg:text-5xl ml-6 uppercase">
                Why Our Services?
              </h1>
              <div className="px-5 mt-12">
                <div className="grid grid-cols-1 gap-3 lg:gap-5 sm:grid-cols-1 mt-100">
                  <div className="flex items-start">
                    <img src="https://i.postimg.cc/RZycYfrD/Rectangle-114.png"></img>
                    <div className="ml-5">
                      <h3 className="text-lg font-bold text-white">
                        24/7 Support
                      </h3>
                      <p className="mt-4 text-base text-gray-200">
                        Get round-the-clock support from our dedicated team.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <img src="https://i.postimg.cc/1zFp1ts5/Rectangle-115.png"></img>
                    <div className="ml-5">
                      <h3 className="text-lg font-bold text-white">
                        Tailored Solutions
                      </h3>
                      <p className="mt-4 text-base text-gray-200">
                        Customized IT solutions that align with your business
                        objectives.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <img src="https://i.postimg.cc/P5PWKy7D/Rectangle-116.png"></img>
                    <div className="ml-5">
                      <h3 className="text-lg font-bold text-white">
                        Expert Team
                      </h3>
                      <p className="mt-4 text-base text-gray-200">
                        Benefit from our experienced professionals who stay
                        ahead of the latest industry trends.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <img src="https://i.postimg.cc/P5PWKy7D/Rectangle-116.png"></img>
                    <div className="ml-5">
                      <h3 className="text-lg font-bold text-white">
                        Scalable Services
                      </h3>
                      <p className="mt-4 text-base text-gray-200">
                        Our services grow with your business, ensuring you
                        always have the support you need.
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

export default ITServiceChoose;
