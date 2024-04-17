import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles.css";
const MovieDetails = () => {
  const location = useLocation();
  const movieDetails = location.state.details;
  return (
    <>
      <div className="row m-4" id="movie-detail-main">
        <div className="col-md-6">
          <img
            src={movieDetails.image}
            className="card-img-top m-3"
            id="card-img"
            alt={movieDetails.title}
          />
        </div>
        <div className="col-md-5 mt-5 ms-4">
          <div className="col-md-12" id="movie-title">
            {movieDetails.title}
          </div>
          <div className="col-md-12" id="movie-sub">
            <div id="movie-genre">{movieDetails.stars}</div>
          </div>
          <div id="movie-details" className="container mt-2">
            <span id="span"> • </span>
            <a>{movieDetails.director}</a>
            <span id="span"> • </span>
            <a> {movieDetails.genre}</a>
            <span id="span"> • </span>
            <a> {movieDetails.duration}</a>
          </div>
          <div className="col-md-6 mt-3">
            <Link
              id="book-btn"
              to="/bookticket"
              state={{ booking: movieDetails }}
              className="btn"
            >
              <i className="fa fa-calendar"></i> Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
