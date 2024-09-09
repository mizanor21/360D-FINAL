import React from "react";
import "./Blogs.css";
import LatestPost from "./LatestPost";



const BlogMain = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Essential Features Your Website Should Have",
      description: "In today’s digital landscape, having a website is essential for businesses to thrive online. However, simply having a website is not enough.",
      image: "https://www.goinnovior.com/wp-content/uploads/2024/06/Essential_Features_Website-scaled.webp",
      author: {
        name: "Kahafil Ora",
        role: "Managing Director",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QHOiPFYMOEJ35-jzXkjACWCBg-6G3FQSmw&s"
      }
    },
    {
      id: 2,
      title: "Importance of EDR In Our IT Sector For Being Organize",
      description: "Endpoint Detection & Response (EDR) is also known as Endpoint Threat Detection and Response.It is an integrated cybersecurity tech",
      image: "https://www.goinnovior.com/wp-content/uploads/2024/04/edr-01.png",
      author: {
        name: "Kahafil Ora",
        role: "Managing Director",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QHOiPFYMOEJ35-jzXkjACWCBg-6G3FQSmw&s"
      }
    },
    {
      id: 3,
      title: "7 Social Engineering Attack Types to deceive human mind",
      description: "Social engineering refers to the psychological manipulation that compel people into acting or disclosing private information of themselves",
      image: "https://www.goinnovior.com/wp-content/uploads/2024/04/Social-Engineering-01.png",
      author: {
        name: "Kahafil Ora",
        role: "Managing Director",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QHOiPFYMOEJ35-jzXkjACWCBg-6G3FQSmw&s"
      }
    }
  ];

  return (
    <div className="">
    <section className="bg-white">
      <div className="px-4 lg:container px-6 py-10 lg:mx-auto lg:max-w-[1300px]">
       

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id}>
              <div className="relative">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src={post.image}
                  alt={post.title}
                />
                <div className="absolute bottom-0 flex p-3 bg-white">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src={post.author.avatar}
                    alt={post.author.name}
                  />
                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700">{post.author.name}</h1>
                    <p className="text-sm text-gray-500">{post.author.role}</p>
                  </div>
                </div>
              </div>
              <h1 className="mt-6 text-xl font-semibold text-gray-800">{post.title}</h1>
              <hr className="w-32 my-6 text-blue-500" />
              <p className="text-sm text-gray-500 text-justify">{post.description}</p>
              <a href="#" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
};

export default BlogMain;