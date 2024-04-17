import React from "react";
import { connect, useSelector } from "react-redux";
import MoviesSlider from "./MoviesSlider";
const DashboardCards = () => {
  const moviesList = useSelector((state) => state.movielist);
  return (
    <>
      <MoviesSlider />
      <h1 className="text-center">Recommended Movies</h1>
      <div className="row m-4">
        {moviesList.map((movies) => (
          <div key={movies.id} className="col-md-3 pull-left mb-3">
            <div className="col">
              <div className="card h-100">
                <img src={movies.image} className="card-img-top" alt="..." />
                <div className="card-body" style={{ display: "none" }}>
                  <h5 className="card-title">{movies.title}</h5>
                  <p className="card-text">{movies.plot}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  //  Use 'counter: state.counter.counter' and replace the above line if you are using combineReducers to ensure that 'counter' matches the correct key in your store.
});

const mapDispatchToProps = (dispatch) => ({
  movies: () => dispatch({ type: "LIST_MOVIES" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCards);
