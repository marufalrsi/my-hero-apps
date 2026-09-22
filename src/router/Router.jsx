import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Home/Home";
import Apps from "../Apps/Apps";
import Installations from "../Installations/Installations";
import ErrorPage from "../Error/Error";
import Nobook from "../Nobook/Nobook";
import Bookdetail from "../Bookdtails/Bookdetails";
const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    // errorElement:<ErrorPage></ErrorPage>,
    children:[
      {index:true,
      Component:Home},
      {
        path:"/apps",
        Component:Apps
      },
      {
        path:"/installations",
        Component:Installations
      },
      {
        path:"/booknofound",
        Component:Nobook
      },
      {
      path:"/bookdetail/:id",
        Component:Bookdetail,
      }
    ],
  },
]);
export default router;