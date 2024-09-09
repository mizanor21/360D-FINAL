const HRServiceBanner = () => {
  return (
    <div>
      <div
        className="bg-gradient-to-r from-[#000F1A] via-[#000F1A] to-[#0080E5]"
        id="#hr-services"
      >
        <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px] lg:pt-28 lg:pb-28">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="lg:pr-10 mt-20">
              <h5 className="mb-4 text-3xl lg:text-6xl font-bold text-white">
                HR Services
              </h5>
              <p className="mb-6 text-white max-w-[700px]">
                A Human Resource Information System (HRIS) is a software
                solution that integrates and manages an organization&apos;s HR
                processes, including employee data, payroll, recruitment,
                benefits administration, and performance management. It
                streamlines and automates HR operations, enhancing efficiency,
                accuracy, and data-driven decision-making.
              </p>
              <button className="btn  text-white bg-[#00B4D8]">
                Learn More
              </button>
            </div>

            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://i.postimg.cc/XY9QbQVC/Pngtree-marketing-strategy-campaign-concept-with-7537111-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRServiceBanner;
