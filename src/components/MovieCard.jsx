import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function MovieCard({ movie }) {
  return (
    <div className="py-5 flex flex-col gap-y-2">
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        alt=""
        width={300}
        className="cursor-pointer max-w-32 h-48 md:max-w-56 md:h-80 rounded-md object-cover border-2 border-gray-900 hover:border-2 hover:border-gray-300 hover:scale-[102%] transition-all duration-300 ease-in-out"
      />
      <h1 className="text-gray-300 font-semibold text-base line-clamp-1">
        {movie.title}
      </h1>
    </div>
  );
}
