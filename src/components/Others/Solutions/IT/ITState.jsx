const ITState = () => {
  return (
    <div className="px-4 lg:container lg:mx-auto mt-10 mb-10 lg:max-w-[1300px]">
      <section className="">
        <div className="mt-12 lg:mt-20">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:gap-x-12">
            <div className="transition-all duration-200 bg-white hover:shadow-xl border-b-4 border-blue-500 shadow-xl ">
              <div className="px-9 py-5">
                <img
                  src="https://i.postimg.cc/B6PYLqPK/school-1.png"
                  alt="Institutional Services"
                  className=" pl-28 w-44"
                />
                <h3 className="mt-8 text-lg font-semibold text-black text-center">
                  Institutional Services
                </h3>
                <p className="mt-4 text-base text-gray-600 text-center">
                  Dedicated to igniting growth and innovation in businesses
                  worldwide.
                </p>
              </div>
            </div>

            <div className="transition-all duration-200 bg-white hover:shadow-xl border-b-4 border-blue-500 shadow-xl">
              <div className="px-9 py-5">
                <img
                  src="https://i.postimg.cc/yxqf0w0r/school-2.png"
                  alt="Institutional Services"
                  className=" pl-28 w-44"
                />
                <h3 className="mt-8 text-lg font-semibold text-black text-center">
                  Professional Services
                </h3>
                <p className="mt-4 text-base text-gray-600 text-center">
                  Dedicated to igniting growth and innovation in businesses
                  worldwide.
                </p>
              </div>
            </div>

            <div className="transition-all duration-200 bg-white hover:shadow-xl border-b-4 border-blue-500 shadow-xl">
              <div className="px-9 py-5">
                <img
                  src="https://i.postimg.cc/fyx8CBKW/school-3.png"
                  alt="Institutional Services"
                  className=" pl-28 w-44"
                />
                <h3 className="mt-8 text-lg font-semibold text-black text-center">
                  Opening Hours
                </h3>
                <p className="mt-4 text-base text-gray-600 text-center">
                  Dedicated to igniting growth and innovation in businesses
                  worldwide.
                </p>
              </div>
            </div>

            {/* <div className="transition-all duration-200 bg-white hover:shadow-xl border-b-4 border-green-500">
                            <div className="py-10 px-9">
                                <img src="https://i.postimg.cc/yxqf0w0r/school-2.png" alt="Professional Services" />
                                <h3 className="mt-8 text-lg font-semibold text-black">Professional Services</h3>
                                <p className="mt-4 text-base text-gray-600">Dedicated to igniting growth and innovation in businesses worldwide.</p>
                            </div>
                        </div>

                        <div className="transition-all duration-200 bg-white hover:shadow-xl border-b-4 border-red-500">
                            <div className="py-10 px-9">
                                <img src="https://i.postimg.cc/fyx8CBKW/school-3.png" alt="Opening Hours" />
                                <h3 className="mt-8 text-lg font-semibold text-black">Opening Hours</h3>
                                <p className="mt-4 text-base text-gray-600">Dedicated to igniting growth and innovation in businesses worldwide.</p>
                            </div>
                        </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITState;
