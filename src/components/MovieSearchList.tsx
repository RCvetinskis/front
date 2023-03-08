import React from "react";
import { useAppSelector } from "../store/store";
import MovieCard from "./MovieCard";

const MovieSearchList: React.FC = () => {
  const movies = useAppSelector((state) => state.movies);
  console.log(movies);
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center mt-3 align-items-center">
      {movies.movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieSearchList;
