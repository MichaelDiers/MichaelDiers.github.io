import { createHashRouter } from "react-router-dom";
import { PageLayout } from "../PageLayout/PageLayout";
import HomeRoute from "./Routes/HomeRoute";
import Home2Route from "./Routes/Home2Route";

const router = createHashRouter([
  {
    element: <PageLayout />,
    children: [
      HomeRoute,
      Home2Route
    ]
  }
]);

export default router;
