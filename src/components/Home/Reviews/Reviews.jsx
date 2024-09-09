import CustomCarousel from "./CustomCarousel";

const items = [
  {
    image:
      "https://www.goinnovior.com/wp-content/uploads/2024/05/Shamsul-arefin.jpg",
    title: "Shamsul Arefin",
    review:
      "“It was a great experience working with 360D Soul Ltd. Their service is too good & they are too supportive also”",
    description: "Head Of IT | New Asia Group",
  },
  {
    image: "https://i.postimg.cc/BvX1P83r/Ellipse-12.png",
    title: "Muhammad Asaduzzaman",
    review:
      "“Outstanding IT-enabled services—proactive, responsive, and invaluable for our business success”",
    description: "IT Head, Mosco Group",
  },
  {
    image:
      "https://www.goinnovior.com/wp-content/uploads/2023/05/tanvir_sir-removebg-preview.png",
    title: "Tanvir Murshed",
    review:
      "“Outstanding IT-enabled services—proactive, responsive, and invaluable for our business success”",
    description: "Managing Director, Prominent Tech Ltd.",
  },
  // Add more items as needed
];

const Reviews = () => {
  return (
    <div className="bg-cover bg-center md:min-h-[800px] flex flex-col justify-center items-center font-[Inter] bg-[url('https://i.postimg.cc/C19cD3Pc/Rectangle-62.png')] px-4 md:px-8 lg:px-16 py-10 md:py-0">
      <div className="text-center ">
        <div className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#013762] via-[#0080E5] bg-clip-text text-transparent">
          <h1>Client&apos;s Testimonial</h1>
        </div>
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mt-2">
          What our Client&apos;s Tell About Us
        </p>
        <CustomCarousel items={items} />
      </div>
    </div>
  );
};

export default Reviews;
