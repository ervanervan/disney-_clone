import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

export default function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      setMovieList(res.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 170;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 170;
  };

  return (
    <div className="relative">
      <ChevronLeftIcon
        className="absolute w-8 h-8 text-gray-200 cursor-pointer left-11 top-1/2 -translate-y-1/2"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <ChevronRightIcon
        className="absolute w-8 h-8 text-gray-200 cursor-pointer right-11 top-1/2 -translate-y-1/2"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto gap-6 py-6 px-24 scrollbar-hide"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            key={item.id}
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt=""
            className="min-w-full h-80 object-cover object-left-top rounded-lg border-4 border-gray-800 hover:border-4 hover:border-gray-200 transition-all duration-300 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
}
