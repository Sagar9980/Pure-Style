import { createBrowserRouter } from "react-router-dom";
import Homepage from "Views/Homepage";
import { MainLayout } from "Layouts/MainLayout";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
  // {
  //   path: "/admin",
  //   element: <Authenticatior />,
  // },
  // {
  //   path: "/",
  //   element: <RouteGuard />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <DashboardLayout />,
  //       children: [

  //       ],
  //     },
  //   ],
  // },
]);
