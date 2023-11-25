import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className=" text-white px-24">
      <h1 className="text-3xl py-3 font-semibold ">{title}</h1>
      <div className="flex overflow-x-scroll  ">
        <div className="flex gap-4  ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
