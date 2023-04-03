export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD";

export const addCard = (cardDetails) => ({
  type: ADD_CARD,
  payload: cardDetails,
});

export const deleteCard = (id) => {
  return {
    type: DELETE_CARD,
    payload: id,
  };
};