import { createStore, combineReducers } from 'redux';
import imagesReducer from '../reducers/imageReducer';
import cardsReducer from "../reducers/cardsReducer";

const rootReducer = combineReducers({
  imagesReducer,
  cardsReducer
});

const store = createStore(rootReducer);

export default store;