import Discover from "@/pages/Discover";
import Friends from "@/pages/Friends";
import Mine from "@/pages/Mine";
import { Redirect } from "react-router-dom";
const routes = [
  {
    path: "/",
    exact: true,
    render: () => {
      return <Redirect to="/discover" />;
    },
  },
  {
    path: "/discover",
    component: Discover,
  },
  {
    path: "/friends",
    component: Friends,
  },
  {
    path: "/mine",
    component: Mine,
  },
];
export default routes;
