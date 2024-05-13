import {
    SEARCH_MOVIES_REQUEST,
    SEARCH_MOVIES_SUCCESS,
    SEARCH_MOVIES_FAILURE,
  } from '../actions/movieActions';
  
  const initialState = {
    movies: null,
    loading: false,
    error: null,
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_MOVIES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SEARCH_MOVIES_SUCCESS:
        return {
          ...state,
          movies: action.payload,
          loading: false,
          error: null,
        };
      case SEARCH_MOVIES_FAILURE:
        return {
          ...state,
          movies: null,
          loading: false,
          error: action.payload,
        };
      case 'CLEAR_MOVIES':
        return initialState
      default:
        return state;
    }
  };
  
  export default movieReducer;
  