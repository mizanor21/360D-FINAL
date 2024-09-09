import { useEffect, useState } from "react";

const HealthTourism = () => {
  const [showContent, setShowContent] = useState(false);

  // Trigger animations after component mounts
  useEffect(() => {
    setTimeout(() => setShowContent(true), 500); // Delay the animation for better effect
  }, []);

  return (
    <div className="font-[Inter] min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#000F1A] via-[#0080E5] to-[#000F1A] text-white overflow-hidden">
      <div
        className={`text-center p-8 transition-all duration-1000 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-2xl lg:text-7xl font-bold mb-4 animate-pulse">
          Health Tourism
        </h1>
        <p className="text-xl mb-6">Something exciting is coming soon!</p>
        <div
          className={` text-white p-4 rounded-lg shadow-lg mb-6 flex flex-col justify-center transition-all duration-1000 ${
            showContent ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <img
            src="https://i.postimg.cc/CLsXKzK5/Rectangle-33.png"
            alt="HR Strategy"
            className="transition-transform duration-700 hover:scale-105"
          />
          <h2 className="text-2xl font-semibold mt-4">Coming Soon</h2>
          <p className="mt-2">
            Stay tuned as we prepare something special just for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthTourism;
