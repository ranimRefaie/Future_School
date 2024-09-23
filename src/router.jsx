import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sign from "./Pages/Sign/Sign";
const router = createBrowserRouter([
  {
    path: "/Future_School",
    element: <Home />,
  },

  {
    path: "/Future_School/signIn",
    element: <Sign />,
  },
]);

export default router;
