import { call, put } from 'redux-saga/effects';
import { GET_IMAGES_FETCHED_ACTION, UPDATE_IMAGE_RATE_FETCHED_ACTION } from '../../actions/images/images.actions';
import { DOMAIN } from '../../constants/config';
import { API } from '../../constants/api.routes';

export const getApi = (url) => fetch(url).then(r => r.json()); 
export const putApi = (body) => (url) => fetch(url, {
  method: 'put',
  headers: {
    "Content-type": "application/json"
  },
  body 
}).then(r => r.json());

export function* getImages() {
  try {
    const images = yield call(getApi, `${DOMAIN}/${API.IMAGES}/`);
    yield put({type: GET_IMAGES_FETCHED_ACTION, data: images});
  } catch (e) {
    console.error(e)
  }
}

export function* updateImageRate(action) {
  try {
    const {rate, id} = action.payload;
    const updatedImage = yield call(putApi(JSON.stringify({rate})), `${DOMAIN}/${API.IMAGES}/${id}`)
    yield put({type: UPDATE_IMAGE_RATE_FETCHED_ACTION, data: updatedImage});
  } catch (e) {
    console.error(e);
  }
}
