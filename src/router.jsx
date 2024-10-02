import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sign from "./Pages/Sign/Sign";
import { About } from "./Pages/AboutUs/About";
import { ContactUs } from "./Pages/ContactUs/ContactUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/signIn",
    element: <Sign />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);

export default router;
