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
