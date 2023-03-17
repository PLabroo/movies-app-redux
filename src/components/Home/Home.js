import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { Oval } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";
import { useState } from "react";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchMoviesAndShows = () => {
    const showMovies = "Golmaal";
    const showSeries = "Friends";
    dispatch(fetchAsyncMovies(showMovies));
    dispatch(fetchAsyncSeries(showSeries));
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchMoviesAndShows();
    }, 4000);
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Oval
          height={80}
          width={80}
          color="black"
          wrapperStyle={{}}
          wrapperClass="spinner"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="white"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      ) : (
        <MovieListing />
      )}
    </>
  );
};

export default Home;
