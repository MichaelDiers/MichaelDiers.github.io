import { RouteObject } from "react-router";
import { Link } from "react-router-dom";

const LinkHandler = ({ link }: { link: RouteObject }) => {
  const to = link.path || '/error';
  const name = link.handle?.link;
  return (
    <Link to={to}>{name}</Link>
  );
}

export default LinkHandler;
