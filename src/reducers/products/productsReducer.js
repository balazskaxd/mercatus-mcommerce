import {
  PRODUCT_LIST_REQUESTED,
  PRODUCT_LIST_SUCCEEDED,
  PRODUCT_LIST_FAILED,
} from '../../consts';
import initialState from './initialState';

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUESTED:
      return {
        ...state,
        fetchingProducts: true,
      };

    case PRODUCT_LIST_SUCCEEDED:
      return {
        ...state,
        data: action.payload.products,
        fetchingProducts: true,
      };

    case PRODUCT_LIST_FAILED:
      return {
        ...state,
        fetchingProducts: false,
      };

    default:
      return state;
  }
};

export default productsReducer;
