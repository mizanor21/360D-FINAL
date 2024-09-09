/* eslint-disable react/prop-types */
// src/components/Tabs.js

import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTabClick = (label) => {
    setActiveTab(label);
    setIsDropdownOpen(false); // Close dropdown when a tab is selected
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="w-full">
      {/* Tab Headers for Desktop */}
      <div className="hidden lg:flex border-b border-gray-200 lg:container lg:mx-auto lg:max-w-[1300px] lg:mb-4 lg:mt-10 ">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`py-2 px-4 flex items-center justify-center ${
              activeTab === tab.label
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => handleTabClick(tab.label)}
          >
            <img
              src={tab.icon}
              alt={tab.label}
              className="h-16 w-40 rounded-full" // Consistent icon size for desktop
            />
          </button>
        ))}
      </div>

      {/* Dropdown for Mobile */}
      <div className="lg:hidden relative my-10 mx-3">
        <button
          onClick={toggleDropdown}
          className="w-full bg-white border border-gray-200 text-gray-700 py-2 px-4 rounded inline-flex justify-between items-center dark:bg-[#20293A] dark:border-slate-700 dark:text-gray-400"
        >
          <span>{tabs.find((tab) => tab.label === activeTab)?.label}</span>
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <div
            className="absolute z-50 mt-2 w-full rounded-md shadow-lg bg-white border border-gray-200 dark:bg-[#20293A] dark:border-slate-700"
            style={{ transition: "opacity 0.3s ease-out" }}
          >
            <div
              className="py-1 text-gray-700 dark:text-gray-400 text-sm"
              role="menu"
              aria-orientation="vertical"
            >
              <div className="grid grid-cols-3">
                {tabs.map((tab) => (
                  <button
                    key={tab.label}
                    onClick={() => handleTabClick(tab.label)}
                    className={`block px-4 py-2 text-left w-full ${
                      activeTab === tab.label
                        ? "bg-blue-500 text-white"
                        : "text-gray-600 hover:bg-gray-100 dark:hover:bg-[#161d2a]"
                    }`}
                    role="menuitem"
                  >
                    <img
                      src={tab.icon}
                      alt={tab.label}
                      className="h-12 w-12 rounded-full inline mr-2"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tab Content */}
      <div className="w-full">
        {tabs.map(
          (tab) =>
            tab.label === activeTab && (
              <div
                key={tab.label}
                className="w-full flex flex-col md:flex-row bg-black text-white"
              >
                <div className="flex-1 flex items-center p-10  rounded-lg">
                  <div>
                    <h1 className="font-bold -3xl lg:text-5xl mb-2">
                      {tab.h1}
                    </h1>
                    <p className="max-w-[600px] text-justify">{tab.p}</p>
                    <button className="mt-4 bg-gray-500 py-2 px-4 rounded-md">
                      Read {tab.label} Stories
                    </button>
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    className="w-full h-[300px] lg:h-[600px] object-cover"
                    src={tab.src}
                    alt={tab.label}
                  />
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;
