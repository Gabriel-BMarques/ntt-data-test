// reducers.js
import { combineReducers } from 'redux';
import movieReducer from './store/reducers/movieReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
});

export default rootReducer;
