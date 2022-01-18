import React from "react";

import { Redirect } from "react-router-dom";

const Discover = React.lazy(() => import("@/pages/Discover"));
const Recommend = React.lazy((_) =>
  import("@/pages/Discover/c-pages/Recommend")
);
const Ranking = React.lazy((_) => import("@/pages/Discover/c-pages/Ranking"));
const Songs = React.lazy((_) => import("@/pages/Discover/c-pages/Songs"));
const Djradio = React.lazy((_) => import("@/pages/Discover/c-pages/Djradio"));
const Artist = React.lazy((_) => import("@/pages/Discover/c-pages/Artist"));
const Album = React.lazy((_) => import("@/pages/Discover/c-pages/Album"));

const Friends = React.lazy((_) => import("@/pages/Friends"));
const Mine = React.lazy((_) => import("@/pages/Mine"));
const NotFound = React.lazy((_) => import("@/components/NotFound"));
const Song = React.lazy((_) => import("@/pages/Player"));
// import Discover from "@/pages/Discover";

// import Recommend from "@/pages/Discover/c-pages/Recommend";
// import Ranking from "@/pages/Discover/c-pages/Ranking";
// import Songs from "@/pages/Discover/c-pages/Songs";
// import Djradio from "@/pages/Discover/c-pages/Djradio";
// import Artist from "@/pages/Discover/c-pages/Artist";
// import Album from "@/pages/Discover/c-pages/Album";

// import Friends from "@/pages/Friends";
// import Mine from "@/pages/Mine";
// import NotFound from "@/components/NotFound";
// import Song from "@/pages/Player";

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
      {
        path: "*",
        exact: true,
        component: NotFound,
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
  {
    path: "/song",
    component: Song,
  },
  {
    path: "*",
    exact: true,
    component: NotFound,
  },
];
export default routes;
