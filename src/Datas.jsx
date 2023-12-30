import {
  HomeIcon,
  MagnifyingGlassIcon,
  PlayCircleIcon,
  PlusIcon,
  StarIcon,
  TvIcon,
} from "@heroicons/react/24/solid";

import Disney from "./assets/images/disney.png";
import Marvel from "./assets/images/marvel.png";
import NationalG from "./assets/images/nationalG.png";
import Pixar from "./assets/images/pixar.png";
import Starwar from "./assets/images/starwar.png";

import VDisney from "./assets/video/disney.mp4";
import VMarvel from "./assets/video/marvel.mp4";
import VNationalG from "./assets/video/national-geographic.mp4";
import VPixar from "./assets/video/pixar.mp4";
import VStarwar from "./assets/video/star-wars.mp4";

export const MENUS = [
  {
    name: "home",
    icon: <HomeIcon className="h-5 w-5 text-white" />,
  },
  {
    name: "search",
    icon: <MagnifyingGlassIcon className="h-5 w-5 text-white" />,
  },
  {
    name: "watch list",
    icon: <PlusIcon className="h-5 w-5 text-white" />,
  },
  {
    name: "originals",
    icon: <StarIcon className="h-5 w-5 text-white" />,
  },
  {
    name: "movies",
    icon: <PlayCircleIcon className="h-5 w-5 text-white" />,
  },
  {
    name: "series",
    icon: <TvIcon className="h-5 w-5 text-white" />,
  },
];

export const LIST_SERIES = [
  {
    id: 1,
    imageURL: Disney,
    videoURL: VDisney,
  },
  {
    id: 2,
    imageURL: Pixar,
    videoURL: VPixar,
  },
  {
    id: 3,
    imageURL: Marvel,
    videoURL: VMarvel,
  },
  {
    id: 4,
    imageURL: Starwar,
    videoURL: VStarwar,
  },
  {
    id: 5,
    imageURL: NationalG,
    videoURL: VNationalG,
  },
];

export const GENRELISTS = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];
