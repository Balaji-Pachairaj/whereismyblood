import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Root from "./Pages/Root";
import Consult from "./Pages/Consult";
import BecomeABloodDonor from "./Pages/BecomeABloodDonor";

const router = createBrowserRouter([
     {
          path: "/",
          element: <Root />,
          children: [
               { index: true, element: <Home /> },
               { path: "onlineconsult", element: <Consult /> },
               { path: "becomeablooddonor", element: <BecomeABloodDonor /> },
          ],
     },
]);

const App = () => {
     return <RouterProvider router={router} />;
};

export default App;
