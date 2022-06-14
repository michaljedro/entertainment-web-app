import React from "react";
import { FaBookmark, FaWindows, MdLocalMovies } from "react-icons/fa";

export const links = [
  {
    id: 1,
    text: "bookmark",
    url: "/bookmark",
    icon: <FaBookmark />,
  },
  {
    id: 2,
    text: "home",
    url: "/home",
    icon: <FaWindows />,
  },
  {
    id: 3,
    text: "movies",
    url: "/movies",
    icon: <MdLocalMovies />,
  },
  {
    id: 3,
    text: "tv-series",
    url: "/series",
    icon: <MdLocalMovies />,
  },
];
