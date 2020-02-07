import { 
  GET_IMAGES_FETCHED_ACTION, UPDATE_IMAGE_RATE_FETCHED_ACTION
} from '../../actions/images/images.actions'; 

const initial = {
  images: []
};

function imagesReducer(state = initial, action) {
  switch (action.type) {
    case GET_IMAGES_FETCHED_ACTION:
      return {
        ...state,
        images: action.data
      };
    case UPDATE_IMAGE_RATE_FETCHED_ACTION:
      return {
        ...state,
        images: state.images.map(image => {
          if (image.id === action.data.id) {
            return action.data;
          }
          return image;
        })
      };
    default:
      return state;
  }
}

export default imagesReducer; 

export const getImagesSelector = (state) => (state.images && state.images.images) || []; 
