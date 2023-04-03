import { ADD_CARD, DELETE_CARD } from "../actions/cardsActions";

const initialStateCards = {
  savedCards: [],
};

const cardsReducer = (state = initialStateCards, action) => {
  switch (action.type) {
    case ADD_CARD:
      return { ...state, savedCards: [...state.savedCards, action.payload] };

    case DELETE_CARD:
      return {
        ...state,
        savedCards: state.savedCards.filter(
          (card) => card.cardNumber !== action.payload.cardNumber
        ),
      };
    default:
      return state;
  }
};

export default cardsReducer;
