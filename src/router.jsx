import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sign from "./Pages/Sign/Sign";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/signIn",
    element: <Sign />,
  },
]);

export default router;
