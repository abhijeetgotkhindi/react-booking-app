import Carousel from "react-bootstrap/Carousel";
import { connect, useSelector } from "react-redux";
function MoviesSlider() {
  const moviesList = useSelector((state) => state.movielist);
  return (
    <div className="row m-4">
      <Carousel data-bs-theme="dark">
        {moviesList.map((movies) => (
          <Carousel.Item key={movies.id}>
            <img
              className="d-block h-100 w-100"
              src={movies.image}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  //  Use 'counter: state.counter.counter' and replace the above line if you are using combineReducers to ensure that 'counter' matches the correct key in your store.
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "LIST_MOVIES" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSlider);
