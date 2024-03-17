import { RouteObject } from "react-router";
import Home from "../../../pages/Home/Index";

const HomeRoute: RouteObject = {
  path: '/',
  element: <Home />,
  handle: {
    link: 'Home',
    title: 'Home'
  }
};

export default HomeRoute;
