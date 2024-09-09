import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Toaster } from "react-hot-toast";
// ..
AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
