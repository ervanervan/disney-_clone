import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function Slider() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      setMovieList(res.data.results);
    });
  };
  return (
    <div>
      <ChevronLeftIcon className="w-6 h-6 text-gray-200" />
      <ChevronRightIcon className="w-6 h-6 text-gray-200" />

      <div className="flex overflow-x-auto gap-10 py-6 pr-20 scrollbar-hide">
        {movieList.map((item) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt=""
            className="min-w-full h-80 object-cover object-left-top rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
