const CareerCouncilingBanner = () => {
  return (
    <div>
      <div>
        <div
          className="bg-gradient-to-r from-[#000F1A] via-[#000F1A] to-[#0080E5]"
          id="#Career-Counselling"
        >
          <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px] lg:pt-28 lg:pb-28">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="lg:pr-10 mt-20">
                <h5 className="mb-4 text-3xl lg:text-6xl font-bold text-white">
                  Career Counselling
                </h5>
                <p className="mb-6 text-white max-w-[700px]">
                  Career counseling involves providing guidance and support to
                  individuals seeking assistance with career-related decisions,
                  planning, and development. It aims to help individuals explore
                  career options, identify their strengths and interests, set
                  career goals, and develop strategies to achieve them through
                  assessments, coaching, and resources.
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
    </div>
  );
};

export default CareerCouncilingBanner;
