import { Redirect } from "react-router-dom";

import Discover from "@/pages/Discover";

import Recommend from "@/pages/Discover/c-pages/Recommend";
import Ranking from "@/pages/Discover/c-pages/Ranking";
import Songs from "@/pages/Discover/c-pages/Songs";
import Djradio from "@/pages/Discover/c-pages/Djradio";
import Artist from "@/pages/Discover/c-pages/Artist";
import Album from "@/pages/Discover/c-pages/Album";

import Friends from "@/pages/Friends";
import Mine from "@/pages/Mine";
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
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: Recommend,
      },
      {
        path: "/discover/ranking",
        component: Ranking,
      },
      {
        path: "/discover/songs",
        component: Songs,
      },
      {
        path: "/discover/djradio",
        component: Djradio,
      },
      {
        path: "/discover/artist",
        component: Artist,
      },
      {
        path: "/discover/album",
        component: Album,
      },
    ],
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
