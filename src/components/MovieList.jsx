import React, { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import GlobalApi from "../services/GlobalApi";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import HorizontalMovieCard from "./HorizontalMovieCard";

export default function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((res) => {
      setMovieList(res.data.results);
      //   console.log(res.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += 500;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <ChevronLeftIcon
        className="absolute w-8 h-8 text-gray-200 cursor-pointer left-10 top-1/2 -translate-y-1/2 hidden md:block z-30"
        onClick={() => sliderLeft(elementRef.current)}
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-5 scrollbar-hide px-5 md:px-10"
      >
        {movieList.map((item, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HorizontalMovieCard movie={item} key={index} />
            ) : (
              <MovieCard movie={item} key={index} />
            )}
          </>
        ))}
      </div>

      <ChevronRightIcon
        className="absolute w-8 h-8 text-gray-200 cursor-pointer right-10 top-1/2 -translate-y-1/2 hidden md:block z-30"
        onClick={() => sliderRight(elementRef.current)}
      />
    </div>
  );
}
