import { RouteObject } from "react-router";
import Home2 from "../../../pages/Home2/Index";

const Home2Route: RouteObject = {
  path: '/home2',
  element: <Home2 />,
  handle: {
    link: 'Home 2',
    title: 'Home2'
  }
};

export default Home2Route;
