import { combineReducers } from 'redux';
import imagesReducer from './images/images.reducer';

const store = combineReducers({
  images: imagesReducer
});

export default store;
