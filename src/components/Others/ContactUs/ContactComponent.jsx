import "./ContactComponent.css";
import { FiNavigation } from "react-icons/fi";
import { FaMailBulk } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ContactComponent = () => {
  const handleClick = () => {
    toast.success("This feature coming soon!");
  };
  const touchData = [
    {
      t1: "Location",
      t2: "House - 774, Road - 11, Avenue - 02, Mirpur DOHS, Dhaka - 1216, Bangladesh.",
      icon: <FiNavigation />,
    },
    {
      t1: "Email Us",
      t2: "info@lifeinnovior.org",
      icon: <FaMailBulk />,
      underline: "4px solid var(--color-violet)",
      cursor: "pointer",
    },
    {
      t1: "Call Us",
      t2: "+880 1922-000025",
      icon: <IoCall />,
      underline: "4px solid var(--color-violet)",
      cursor: "pointer",
    },
  ];

  return (
    <div className="contactcomponent-container font-[Inter]">
      <div className="contactcomponent-left">
        <h1>Send us a message</h1>
        <p>
          Thank you for your interest in contacting us. Please fill out the form
          below with your message and we will get back to you as soon as
          possible.
        </p>

        <div className="contact-input-container">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button onClick={handleClick} className="btn">
            Send Message
          </button>
        </div>
      </div>

      <div className="contactcomponent-right">
        <h2>Get in touch</h2>

        {touchData.map((item, index) => (
          <div className="purata" key={index}>
            <div className="purata-box">
              <div className="icon-box">{item.icon}</div>
              <div className="likha-box">
                <h3
                  style={{ borderBottom: item.underline, cursor: item.cursor }}
                >
                  {item.t1}
                </h3>
                <p>{item.t2}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="footer_top4">
          <div className="network">
            <h3>Follow our social network </h3>
            <div className="social-media-container">
              <Link
                to="https://www.facebook.com/profile.php?id=61560437951603"
                target="_blank"
                className="social-media"
              >
                <FaFacebookF />
              </Link>
              <div className="social-media" onClick={handleClick}>
                <FaTwitter />
              </div>
              <Link
                to="https://www.linkedin.com/company/360dsoul/posts"
                target="_blank"
                className="social-media"
              >
                <FaLinkedinIn />
              </Link>
              <div className="social-media" onClick={handleClick}>
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
