import {
  PRODUCT_LIST_REQUESTED,
  PRODUCT_DETAILS_REQUESTED,
} from '../consts';

export const getProductList = () => ({
  type: PRODUCT_LIST_REQUESTED,
});

export const getProductDetails = (id) => ({
  type: PRODUCT_DETAILS_REQUESTED,
  payload: {
    id,
  },
});
