// src/components/CareerPage.js
import { Link } from "react-router-dom";

const jobListings = [
  {
    id: 1,
    title: "Junior Full-Stack Developer",
    location: "Mirpur DOHS - Dhaka",
    description:
      "We are looking for a creative Full-Stack Developer to join our team. You will be responsible for building responsive and user-friendly web interfaces and API Implementation.",
    requirements: [
      "2+ years of experience with React",
      "Strong understanding of HTML, CSS, and JavaScript",
      "Experience with version control systems",
    ],
    applyLink: "#",
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "San Francisco, CA",
    description:
      "Join our backend team to work on scalable server-side applications. You will design and develop APIs and ensure the efficiency of the backend systems.",
    requirements: [
      "3+ years of experience with Node.js",
      "Strong knowledge of databases and server architecture",
      "Experience with cloud platforms",
    ],
    applyLink: "#",
  },
  {
    id: 3,
    title: "Backend Developer",
    location: "San Francisco, CA",
    description:
      "Join our backend team to work on scalable server-side applications. You will design and develop APIs and ensure the efficiency of the backend systems.",
    requirements: [
      "3+ years of experience with Node.js",
      "Strong knowledge of databases and server architecture",
      "Experience with cloud platforms",
    ],
    applyLink: "#",
  },
  {
    id: 4,
    title: "Backend Developer",
    location: "San Francisco, CA",
    description:
      "Join our backend team to work on scalable server-side applications. You will design and develop APIs and ensure the efficiency of the backend systems.",
    requirements: [
      "3+ years of experience with Node.js",
      "Strong knowledge of databases and server architecture",
      "Experience with cloud platforms",
    ],
    applyLink: "#",
  },
  {
    id: 5,
    title: "Backend Developer",
    location: "San Francisco, CA",
    description:
      "Join our backend team to work on scalable server-side applications. You will design and develop APIs and ensure the efficiency of the backend systems.",
    requirements: [
      "3+ years of experience with Node.js",
      "Strong knowledge of databases and server architecture",
      "Experience with cloud platforms",
    ],
    applyLink: "#",
  },
  {
    id: 6,
    title: "Backend Developer",
    location: "San Francisco, CA",
    description:
      "Join our backend team to work on scalable server-side applications. You will design and develop APIs and ensure the efficiency of the backend systems.",
    requirements: [
      "3+ years of experience with Node.js",
      "Strong knowledge of databases and server architecture",
      "Experience with cloud platforms",
    ],
    applyLink: "#",
  },
  // Add more job listings here
];

const CareerPage = () => {
  return (
    <div className="">
      {/* Job Listings Section */}
      <section className="bg-white py-16">
        <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px] px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Current Job Openings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-4">{job.location}</p>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Requirements
                </h4>
                <ul className="list-disc list-inside mb-4">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="text-gray-600">
                      {req}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/job/${job.id}`}
                  className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="bg-[#00457B] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8">
            Join us and be part of a creative, innovative team that’s committed
            to making an impact. Don’t miss out on the opportunity to grow your
            career with us.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
