import { combineReducers } from "redux";
import MovieList from "./movieList";
import LatestMovies from './latestmovies';
import UpcomingEvents from './upcomingevents';
import UpcomingMovies from './upcomingmovies';
const rootReducer = combineReducers({
  movielist: MovieList,
  latestmovies: LatestMovies,
  upcomingevents: UpcomingEvents,
  upcomingmovies: UpcomingMovies,
});

export default rootReducer;
