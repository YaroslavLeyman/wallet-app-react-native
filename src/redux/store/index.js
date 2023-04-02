import { createStore, combineReducers } from 'redux';
import imagesReducer from '../reducers/imageReducer';

const rootReducer = combineReducers({
  imagesReducer
});

const store = createStore(rootReducer);

export default store;