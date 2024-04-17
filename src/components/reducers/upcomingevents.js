import db from "../../db.json";
// const initialState = {
//   movieslist: db.movies,
// };
const initialState = db.upcomingevents;
export default upcomingEventsListReducer = () => {
  return initialState;
};
