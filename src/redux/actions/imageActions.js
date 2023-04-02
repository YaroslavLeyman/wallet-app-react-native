export const ADD_IMAGE = "ADD_IMAGE";
export const DELETE_IMAGE = "DELETE_IMAGE";

export const addImage = (image) => {
  return {
    type: ADD_IMAGE,
    payload: image,
  };
};

export const deleteImage = (id) => {
  return {
    type: DELETE_IMAGE,
    payload: id,
  };
};
