import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import GlobalApi from "../services/GlobalApi";

export default function MovieList({ genreId }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((res) => {
      setMovieList(res.data.results);
      //   console.log(res.data.results);
    });
  };

  return (
    <div className="flex overflow-x-auto gap-5 scrollbar-hide px-5 md:px-10 pt-5">
      {movieList.map((item, index) => (
        <MovieCard movie={item} key={index} />
      ))}
    </div>
  );
}
