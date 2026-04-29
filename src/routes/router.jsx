import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ToyDetails from "../pages/ToyDetails";
import MyProfile from "../pages/MyProfile";
import MyOrders from "../pages/MyOrders";
import Error404 from "../pages/Error404";
import PrivateRoute from "../components/PrivateRoute";
import ForgotPassword from "../pages/ForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "forgot-password", element: <ForgotPassword/> },
       { path: "my-profile", element:
          
            <MyProfile/>
          
      },
      { path: "toy/:id", element:
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>,
        loader: () => fetch("/toys.json")
      },
     
      { path: "orders", element:
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
      },
      { path: "*", element: <Error404 /> }
    ]
  },
  
]);

export default router;

