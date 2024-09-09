import { GoChevronDown } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";
import logo from "../../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const handleClick = () => {
    toast.success("Brochure is coming soon!");
  };
  // const onButtonClick = () => {
  //   fetch("/assets/documents/360D_Brochure.pdf").then((response) => {
  //     response.blob().then((blob) => {
  //       const fileURL = window.URL.createObjectURL(blob);
  //       const alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = "360D_Brochure.pdf";
  //       alink.click();
  //     });
  //   });
  // };

  const navItems = (
    <>
      <li>
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/explore"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Explore
        </Link>
      </li>
      <li className="relative group">
        <span className="cursor-pointer flex items-center">
          Solution <GoChevronDown className="ml-1 font-bold text-2xl" />
        </span>
        <ul className="absolute lg:left-[-600px] lg:w-[1530px] mt-10 hidden z-100 bg-gradient-to-r from-[#000F1A] via-[#0080E5] to-[#000F1A] text-black shadow-md rounded-md group-hover:block p-2">
          <div className="flex justify-center items-center gap-6 py-10">
            <a to="/HR-Strategy">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <Link
                  to="/HR-Strategy"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <div className="grid grid-cols-2 gap-4 shadow-2xl">
                    <div>
                      <img
                        src="https://i.postimg.cc/76JjP9Cr/Rectangle-29-1.png"
                        alt="HR Strategy"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <div>
                        <h1 className="text-lg font-semibold mb-2 text-white">
                          HR STRATEGY
                        </h1>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/IT-Strategy"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <div className="grid grid-cols-2 gap-4 shadow-2xl">
                    <div>
                      <img
                        src="https://i.postimg.cc/X7bt3w4t/Rectangle-31.png"
                        alt="HR Strategy"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <div>
                        <h1 className="text-lg font-semibold mb-2 text-white">
                          IT STRATEGY
                        </h1>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </a>
          </div>
        </ul>
      </li>
      <li className="relative group">
        <span className="cursor-pointer flex items-center">
          Services <GoChevronDown className="ml-1 font-bold text-2xl" />
        </span>

        <ul className="absolute lg:left-[-750px] lg:w-[1530px] mt-10 hidden z-100 bg-gradient-to-r from-[#000F1A] via-[#0080E5] to-[#000F1A] text-black shadow-md rounded-md group-hover:block p-2">
          <div className="flex justify-center items-center gap-6 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
              <Link
                to="/HR-Services"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="shadow-2xl">
                  <img
                    src="https://i.postimg.cc/BbWkjFDL/Rectangle-29-2.png"
                    alt="HR Strategy"
                  />
                  <h1 className="text-lg font-semibold my-2 text-center text-white">
                    HR Services
                  </h1>
                </div>
              </Link>

              <Link
                to="/IT-Services"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="shadow-2xl">
                  <img
                    src="https://i.postimg.cc/X7bt3w4t/Rectangle-31.png"
                    alt="HR Strategy"
                  />
                  <h1 className="text-lg font-semibold my-2 text-center text-white">
                    IT Services
                  </h1>
                </div>
              </Link>
              <Link
                to="/Career-Counselling"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="shadow-2xl">
                  <img
                    src="https://i.postimg.cc/j2z9PjQ8/Rectangle-32.png"
                    alt="HR Strategy"
                  />
                  <h1 className="text-lg font-semibold my-2 text-center text-white">
                    Career Counseling
                  </h1>
                </div>
              </Link>
              <Link
                to="/Health-Tourism"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="shadow-2xl">
                  <img
                    src="https://i.postimg.cc/CLsXKzK5/Rectangle-33.png"
                    alt="HR Strategy"
                  />
                  <h1 className="text-lg font-semibold my-2 text-center text-white">
                    Health Tourism
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        </ul>
      </li>

      <li>
        <Link
          to="/blog"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Blogs
        </Link>
      </li>
      <li>
        <Link
          to="/career"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Career
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-gradient-to-r from-[#000F1A] via-[#0080E5] to-[#000F1A] fancyNav sticky top-0 z-50 text-white shadow-md">
      <div className="navbar flex justify-between items-center">
        <div className="container mx-auto flex justify-between items-center">
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-b from-[#000F1A] via-[#0080E5] to-[#000F1A] rounded-box w-72"
              >
                {navItems}
              </ul>
            </div>
            <Link to="/" className="text-5xl ">
              <img
                src={logo}
                className="w-20"
                title="360D SOUL LIMITED"
                alt="360D logo"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex flex-grow">
            <ul className="menu menu-horizontal px-1 flex items-center text-[18px]">
              {navItems}
            </ul>
          </div>
          <div className="navbar-end flex items-center">
            <button
              onClick={handleClick}
              title="Coming Soon"
              to="#"
              className="bg-black text-white hover:text-white duration-500 rounded-full px-5 py-2 flex items-center cursor-pointer"
            >
              Brochure <MdOutlineFileDownload className="ml-2 text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
