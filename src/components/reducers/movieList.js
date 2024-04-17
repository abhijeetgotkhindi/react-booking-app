import db from "../../db.json";
// const initialState = {
//   movieslist: db.movies,
// };
const initialState = db.movies;
export default moviesListReducer = () => {
  return initialState;
};
