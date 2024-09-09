import React from "react";
import "./LatestPost.css";
import { FaRegCalendar } from "react-icons/fa";




import { MdKeyboardArrowRight } from "react-icons/md";

const LatestPost = () => {
  const postData = [
    {
      src: 'https://i.postimg.cc/BbWkjFDL/Rectangle-29-2.png',
      title: "Shining a Light on Panic Attacks: Awareness and Recovery",
      date: "17 August 2024",
    },
    {
      src: 'https://i.postimg.cc/BbWkjFDL/Rectangle-29-2.png',
      title: "How To Overcome Social Anxiety: 9 Proven Steps for Success",
      date: "16 August 2024",
    },
    {
      src: 'https://i.postimg.cc/BbWkjFDL/Rectangle-29-2.png',
      title: "10 Powerful Tips To Overcome Depression: Embrace A Happier Life",
      date: "15 August 2024",
    },
    {
      src: 'https://i.postimg.cc/BbWkjFDL/Rectangle-29-2.png',
      title: "How to Tackle Frustration Like a Pro: Mastering Your Mindset",
      date: "14 August 2024",
    },
  ];

    const cateData = [
        {
            t1: "Therapy",
        },
        {
            t1: "Psychologists",
        },
        {
            t1: "Love",
        },
        {
            t1: "Depression",
        },
        {
            t1: "Anxiety",
        },
    ];
  return (
    <div className="latestpost-container font-[Inter]">
      <h3>Latest Post</h3>
      <div className="post-container">
        {postData.map((item, index) => (
          <div className="post" key={index}>
            <div className="post-image">
              <img src={item.src} />
            </div>
            <div className="post-details">
              <p>{item.title}</p>
              <div className="post-date">
                <FaRegCalendar />
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="post-category">
        <h3>Categories</h3>

        <div className="Category-container">


            {cateData.map((item,index)=>(
                <div className="cate" key={index}>
                <MdKeyboardArrowRight className="icon" />
                <span>{item.t1}</span>
              </div>
            ))}
          

          
        </div>
      </div>


      <div className="needhelp-container">
            <span>NEED HELP?</span>
            <p>Get The Support You Need From One Of Our Therapists</p>
            <button>Conatct Us</button>
      </div>
    </div>
  );
};

export default LatestPost;