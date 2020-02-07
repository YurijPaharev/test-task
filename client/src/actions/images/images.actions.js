export const GET_IMAGES_ACTION = '[images] get';
export const GET_IMAGES_FETCHED_ACTION = '[images] get fetched'
export const UPDATE_IMAGE_RATE_ACTION = '[images] update rate';
export const UPDATE_IMAGE_RATE_FETCHED_ACTION = '[images] update rate fetched';

export const getImagesAction = () => ({
  type: GET_IMAGES_ACTION,
});

export const getImagesFetchedAction = (payload) => ({
  type: GET_IMAGES_FETCHED_ACTION, payload
});

export const updateImageRateAction = ({rate, id}) => ({
  type: UPDATE_IMAGE_RATE_ACTION, payload: {rate, id}
});

export const updateimageRateFetchedAction = (payload) => ({
  type: UPDATE_IMAGE_RATE_FETCHED_ACTION, payload
});
