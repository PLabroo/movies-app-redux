import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieapi";
import { APIKey } from "../../common/api/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (search) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${search}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async (search) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${search}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrSeriesDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrSeriesDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: [],
  shows: [],
  selectedMovieOrShow: [],
  loading: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = [];
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      console.log("Pending");
      state.loading = true;
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Success");
      return { ...state, movies: payload, loading: false };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Reject");
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("Fetched Series Success");
      return { ...state, shows: payload, loading: false };
    },
    [fetchAsyncMovieOrSeriesDetail.pending]: (state, { payload }) => {
      console.log("Fetched By Id Pending");
      return { ...state, loading: true };
    },
    [fetchAsyncMovieOrSeriesDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched By Id Success");
      return { ...state, selectedMovieOrShow: payload, loading: false };
    },
  },
});

export const { removeSelectedMovieOrShow } = moviesSlice.actions;

// "state".reducer.state
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export const loaded = (state) => state.movies.loading;
export default moviesSlice.reducer;
