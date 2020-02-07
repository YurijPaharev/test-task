import { takeLatest, all } from 'redux-saga/effects';
import { GET_IMAGES_ACTION, UPDATE_IMAGE_RATE_ACTION } from '../actions/images/images.actions';
import { getImages, updateImageRate } from './images/images.saga';

export function* rootSaga() {
  yield all([
    takeLatest(GET_IMAGES_ACTION, getImages),
    takeLatest(UPDATE_IMAGE_RATE_ACTION, updateImageRate)
  ])
}

export default rootSaga;
