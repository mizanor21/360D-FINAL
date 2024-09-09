import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../components/Error/ErrorPage";
import Root from "../components/Home/Root";
import ExploreUs from "../components/Others/ExploreUs/ExploreUs";
import ITStrategy from "../components/Others/Solutions/IT/ITStrategy";
import HRStrategy from "../components/Others/Solutions/HR/HRStrategy";
import ITService from "../components/Others/Services/IT-Service/ITService";
import HRServices from "../components/Others/Services/HR-Service/HRServices";
import CareerCounciling from "../components/Others/Services/Career-Counciling/CareerCounciling";
import ContactUs from "../components/Others/ContactUs/ContactUs";
import CareerMain from "../components/Others/Career/CareerMain";
import Blogs from "../components/Others/Blogs/Blogs";
import JobDetailPage from "../components/Others/Career/JobDetails";
import HealthTourism from "../components/Others/Services/Health-Tourism/Health-Tourism";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/explore",
        element: <ExploreUs />,
      },
      {
        path: "/career",
        element: <CareerMain></CareerMain>,
      },
      {
        path: "/job/:id",
        element: <JobDetailPage></JobDetailPage>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/IT-Strategy",
        element: <ITStrategy></ITStrategy>,
      },
      {
        path: "/HR-Strategy",
        element: <HRStrategy />,
      },
      {
        path: "/HR-Services",
        element: <HRServices></HRServices>,
      },
      {
        path: "/IT-Services",
        element: <ITService></ITService>,
      },
      {
        path: "/Career-Counselling",
        element: <CareerCounciling></CareerCounciling>,
      },
      {
        path: "/Health-Tourism",
        element: <HealthTourism />,
      },
    ],
  },
]);

export default router;
