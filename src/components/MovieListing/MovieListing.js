import React from "react";
import Slider from "react-slick";
import NoShowOrMovie from "../NoShowOrMovie";
import "react-toastify/dist/ReactToastify.css";
import { Settings } from "../../settings/settings";
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllSeries);
  let renderMovies;
  let renderSeries;

  if (movies.Response === "True") {
    renderMovies = movies.Search.map((movie, index) => {
      return <MovieCard key={index} data={movie} />;
    });
  }
  if (shows.Response === "True") {
    renderSeries = shows.Search.map((show, index) => {
      return <MovieCard key={index} data={show} />;
    });
  }

  return (
    <>
      {movies.Response === "False" && shows.Response === "False" ? (
        <NoShowOrMovie />
      ) : (
        <div className="movie-wrapper">
          <div className="movie-list">
            <h2>Movies</h2>
            <div className="movie-container">
              <Slider {...Settings}>{renderMovies}</Slider>
            </div>
          </div>
          <div className="series-list">
            <h2>Series</h2>
            <div className="movie-container">
              <Slider {...Settings}> {renderSeries}</Slider>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieListing;
