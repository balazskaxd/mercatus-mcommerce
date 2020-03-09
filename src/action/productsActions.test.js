import * as TYPES from '../consts';
import * as ACTIONS from './productsActions';

describe('products actions', () => {
  it('should create an action to get product list', () => {
    const expectedAction = {
      type: TYPES.PRODUCT_LIST_REQUESTED,
    };
    expect(ACTIONS.getProductList()).toEqual(expectedAction);
  });

  it('should create an action to get details of the selected product', () => {
    const id = 'id';
    const expectedAction = {
      type: TYPES.PRODUCT_DETAILS_REQUESTED,
      payload: {
        id,
      },
    };
    expect(ACTIONS.getProductDetails(id)).toEqual(expectedAction);
  });
});
