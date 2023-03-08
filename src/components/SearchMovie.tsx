import React from "react";
import { fetchMoviesSuccess } from "../store/features/movieSlice";
import { useAppDispatch } from "../store/store";
import tmdb from "../tmdb";
const SearchMovie = () => {
  const dispatch = useAppDispatch();

  const fetchMovies = async (
    searchQuery: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const { data } = await tmdb.get(
        `search/movie?language=en-US&page=1&include_adult=false&query=${searchQuery.target.value}`
      );

      dispatch(fetchMoviesSuccess(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input onChange={fetchMovies} type="text" />
    </div>
  );
};

export default SearchMovie;
