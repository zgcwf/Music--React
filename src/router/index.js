import Discover from "@/pages/Discover";
import Friends from "@/pages/Friends";
import Mine from "@/pages/Mine";

const routes = [
  {
    path: "/",
    exact: true,
    component: Discover,
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
