import { createBrowserRouter } from "react-router-dom";
import Home_1 from "./Pages/Home/Home";
import Sign from "./Pages/Sign/Sign";
import { About } from "./Pages/AboutUs/About";
import { ContactUs } from "./Pages/ContactUs/ContactUs";
import { Home } from "./Dashboard/Pages/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home_1 />,
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
  {
    path: "/dashboard",
    element: <Home />,
  },
]);

export default router;
