import { LATEST_MOVIES } from "../actions/actions";
import db from "../../db.json";
// const initialState = {
//   movieslist: db.movies,
// };
const initialState = db.latestmovies;
export default latestMoviesListReducer = () => {
  return initialState;
};
