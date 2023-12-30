import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function HorizontalMovieCard({ movie }) {
  return (
    <div className="py-5">
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        alt=""
        width={300}
        className="cursor-pointer max-w-32 md:max-w-56 rounded-md object-cover border-2 border-gray-900 hover:border-2 hover:border-gray-300 hover:scale-[102%] transition-all duration-300 ease-in-out"
      />
    </div>
  );
}
