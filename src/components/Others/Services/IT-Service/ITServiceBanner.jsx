const ITServiceBanner = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#000F1A] via-[#000F1A] to-[#0080E5]"
      id="#it-services"
    >
      <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px] lg:pt-28 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10 mt-20">
            <h5 className="mb-4 text-3xl lg:text-6xl font-bold text-white">
              IT Services
            </h5>
            <p className="mb-6 text-white max-w-[700px]">
              In today’s digital landscape, robust IT services are crucial for
              any business. Our IT solutions are designed to drive efficiency,
              improve security, and support your growth objectives. We offer
              end-to-end IT services tailored to meet the unique needs of your
              organization.
            </p>
            <button className="btn  text-white bg-[#00B4D8]">Learn More</button>
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
  );
};

export default ITServiceBanner;
