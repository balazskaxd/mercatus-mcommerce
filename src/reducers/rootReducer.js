import { combineReducers } from 'redux';
import products from './products/productsReducer';

const rootReducer = combineReducers({
  products,
});

export default rootReducer;
