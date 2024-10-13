import { createBrowserRouter } from "react-router-dom";
import Home_1 from "./Pages/Home/Home";
import Sign from "./Pages/Sign/Sign";
import { About } from "./Pages/AboutUs/About";
import { ContactUs } from "./Pages/ContactUs/ContactUs";
import { Home } from "./Dashboard/Pages/Home/Home";
import Students from "./Dashboard/Pages/Students/Students";
import { Absence } from "./Dashboard/Pages/Absence/Absence";
import { Quizzes } from "./Dashboard/Pages/Quizzes/Quizzes";
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

  {
    path: "/students",
    element: <Students />,
  },
  {
    path: "/absence",
    element: <Absence />,
  },
  {
    path: "/Quizzes",
    element: <Quizzes />,
  },
]);

export default router;
