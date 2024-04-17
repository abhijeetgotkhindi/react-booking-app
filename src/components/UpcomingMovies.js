import React from "react";
import { connect, useSelector } from "react-redux";
const UpcomingMovies = () => {
  const upcomingmovies = useSelector((state) => state.upcomingmovies);
  return (
    <>
      <div className="row m-4">
        <h1 className="text-center">Latest Movies</h1>
        {upcomingmovies.map((movies) => (
          <div key={movies.id} className="col-md-4 g-4 pull-left">
              <div className="card">
                <div className="col">
                  <div className="card h-100">
                    <img
                      src={movies.imageUrl}
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
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  upcomingmovies: state.movies,
  //  Use 'counter: state.counter.counter' and replace the above line if you are using combineReducers to ensure that 'counter' matches the correct key in your store.
});

const mapDispatchToProps = (dispatch) => ({
  movies: () => dispatch({ type: "UPCOMING_MOVIES" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingMovies);
