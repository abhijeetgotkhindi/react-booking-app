export const LIST_MOVIES = "LIST_MOVIES";
export const LATEST_MOVIES = "LATEST_MOVIES";
export const UPCOMING_MOVIES = "UPCOMING_MOVIES";
export const UPCOMING_EVENTS = "UPCOMING_EVENTS";

export const listmovies = (movies) => ({
  type: LIST_MOVIES,
  payload: movies,
});

export const latestmovies = (movies) => ({
  type: LATEST_MOVIES,
  payload: movies,
});

export const upcomingmovies = (movies) => ({
  type: UPCOMING_MOVIES,
  payload: movies,
});

export const upcomingevents = (events) => ({
  type: UPCOMING_EVENTS,
  payload: events,
});
