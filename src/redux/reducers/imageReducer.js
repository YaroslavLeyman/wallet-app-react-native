import { ADD_IMAGE, DELETE_IMAGE } from "../actions/imageActions";

const initialState = {
  images: [],
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        images: [...state.images, action.payload],
      };

    case DELETE_IMAGE:
      return {
        ...state,
        images: state.images.filter((image) => image.id !== action.payload),
      };

    default:
      return state;
  }
};

export default imagesReducer;
