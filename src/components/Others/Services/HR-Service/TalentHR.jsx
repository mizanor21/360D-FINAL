import React from 'react'

const TalentHR = () => {
  return (
    <div>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid max-w-screen-lg gap-8 row-gap-6 sm:mx-auto lg:grid-cols-2">
        <a
          href="/"
          aria-label="View item"
          title="View item"
          className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
        >
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative flex items-center justify-between p-5 bg-white rounded-sm">
            <div className="pr-4">
              <h6 className="mb-4 font-semibold text-2xl">
              Talent Hunt
              </h6>
              <p className="text-sm text-gray-900 text-justify">
              Talent hunt, or headhunting, is the proactive process of identifying and recruiting highly skilled and experienced individuals for specific roles within an organization, often for senior or executive positions. This targeted recruitment approach involves seeking out candidates who are not actively looking for a job but possess the desired expertise and qualifications to meet the company's needs.

              </p>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </div>
          </div>
        </a>
        <a
          href="/"
          aria-label="View item"
          title="View item"
          className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
        >
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative flex items-center justify-between p-5 bg-white rounded-sm">
            <div className="pr-4">
              <h6 className="mb-4 font-semibold text-2xl">
              Training & Development
              </h6>
              <p className="text-sm text-gray-900 text-justify">
              Training and development refer to the continuous process of enhancing employees' skills, knowledge, and competencies through various educational programs and learning opportunities. It aims to improve individual and organizational performance, foster career growth, and adapt to changing industry demands.
z
              </p>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
    </div>
  )
}

export default TalentHR