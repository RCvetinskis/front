import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface MovieListState {
  movies: Movie[];
  isLoading: boolean;
  error: null | string;
}

const initialState: MovieListState = {
  movies: [],
  isLoading: false,
  error: null,
};

export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMoviesStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchMoviesSuccess: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    },
    fetchMoviesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default MovieSlice.reducer;
export const { fetchMoviesFailure, fetchMoviesStart, fetchMoviesSuccess } =
  MovieSlice.actions;
