import React from "react";
import { connect, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
const LatestMovies = () => {
  const moviesList = useSelector((state) => state.latestmovies);
  return (
    <>
      <div className="row m-4">
        <h1 className="text-center">Latest Movies</h1>
        {moviesList.map((movies) => (
          <div key={movies.id} className="col-md-4 g-4 pull-left">
            <Link
              to="/moviedetails"
              state={{ details: movies }}
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <div className="col">
                  <div className="card h-100">
                    <img
                      src={movies.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{movies.title}</h5>
                      <p className="card-text">{movies.plot}</p>
                    </div>
                    <div className="card-footer text-center">
                      <span className="col-md-8 btn btn-primary">Book</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  latestmovies: state.movies,
  //  Use 'counter: state.counter.counter' and replace the above line if you are using combineReducers to ensure that 'counter' matches the correct key in your store.
});

const mapDispatchToProps = (dispatch) => ({
  movies: () => dispatch({ type: "LATEST_MOVIES" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LatestMovies);
