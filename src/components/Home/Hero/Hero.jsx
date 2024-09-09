import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Hero.css";
import banner2 from "../../../assets/banner/slider2.png";

const Reviews = () => {
  return (
    <div className="bg font-[Inter] none">
      <div className="lg:container lg:mx-auto relative py-10 lg:py-20">
        <div className="hidden lg:block absolute right-[0px] top-36 custom-width lg:w-[900px] lg:p-[90px] bg-white shadow-lg rounded-md z-10">
          <div className="text-4xl font-bold bg-gradient-to-r from-[#013762] via-[#0080E5] bg-clip-text text-transparent">
            Company Goal
          </div>
          <div className="flex justify-center md:justify-start mt-[18px] mb-[40px]">
            <span className="border-[3px] border-[#00B4D8] w-[25px]"></span>
            <span className="border-[3px] border-[#0077B6] w-[30px]"></span>
            <span className="border-[3px] border-[#03045E] w-[35px]"></span>
          </div>
          <p className="text-justify overflow-hidden">
            360D SOUL is more than a business development firm, ensuring your
            business growth and partnership. Expertise and passion, we craft
            tailored solutions to elevate your business to new heights. Let’s
            collaborate, innovate, and thrive together in the ever-evolving
            landscape of success.
          </p>
          <button className="font-semibold bg-gradient-to-r from-[#013762] via-[#0080E5] to-[#013762] text-white px-10 py-3 mt-5 rounded-md">
            Learn More
          </button>
        </div>

        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          }}
          showDots={false}
          slidesToSlide={1}
          swipeable
        >
          <div className="relative">
            <img
              className="custom-width lg:w-[1000px] md:mb-10"
              src={banner2}
              alt="Banner 2"
            />
          </div>

          <div className="relative">
            <img
              className="custom-width  lg:w-[1000px] md:mb-10"
              src="https://i.postimg.cc/B6r6c8T7/Rectangle-6-1.png"
              alt="Banner 1"
            />
          </div>

          <div className="relative">
            <img
              className="custom-width lg:w-[1000px] md:mb-10"
              src="https://i.postimg.cc/90yfxW1m/Rectangle-6-2.png"
              alt="Banner 2"
            />
          </div>

          <div className="relative">
            <img
              className="custom-width lg:w-[1000px] md:mb-10"
              src="https://i.postimg.cc/pXtrmFXp/Rectangle-6-5.png"
              alt="Banner 3"
            />
          </div>

          <div className="relative">
            <img
              className="custom-width lg:w-[1000px] md:mb-10"
              src="https://i.postimg.cc/c1361mWp/Rectangle-6-3.png"
              alt="Banner 4"
            />
          </div>

          <div className="relative">
            <img
              className="custom-width lg:w-[1000px] md:mb-10"
              src="https://i.postimg.cc/65L3npyz/Rectangle-6-4.png"
              alt="Banner 5"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
