export const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST';
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';

export const searchMoviesRequest = () => ({
  type: SEARCH_MOVIES_REQUEST,
});

export const searchMoviesSuccess = (movies) => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload: movies,
});

export const searchMoviesFailure = (error) => ({
  type: SEARCH_MOVIES_FAILURE,
  payload: error,
});

export const clearMovies = () => ({
  type: 'CLEAR_MOVIES',
});
