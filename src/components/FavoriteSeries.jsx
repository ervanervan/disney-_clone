import React from "react";
import { LIST_SERIES } from "../Datas";

export default function FavoriteSeries() {
  return (
    <section>
      <div className="flex flex-wrap items-center md:justify-center gap-3 lg:gap-5 py-4">
        {LIST_SERIES.map((series) => (
          <div
            key={series.id}
            className="relative border border-gray-800 shadow-2xl shadow-gray-900 overflow-hidden rounded-md cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <img
              src={series.imageURL}
              alt=""
              className="w-[9.50rem] md:w-32 xl:w-56"
            />
            <video
              src={series.videoURL}
              autoPlay
              playsInline
              loop
              muted
              className="absolute top-0 w-full opacity-0 hover:opacity-50"
            ></video>
          </div>
        ))}
      </div>
    </section>
  );
}
