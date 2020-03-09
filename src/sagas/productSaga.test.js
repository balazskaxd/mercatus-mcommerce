import { call, delay, put } from 'redux-saga/effects';
import * as SAGAS from './productSaga';
import * as API from '../api';
import * as TYPES from '../consts';


describe('app sagas', () => {
  it('gets product list', () => {
    const gen = SAGAS.getProductList();
    const products = expect(gen.next().value).toEqual(call(API.getProductList));
    expect(gen.next().value).toEqual(delay(2000));
    expect(gen.next().value).toEqual(put({
      type: TYPES.PRODUCT_LIST_SUCCEEDED,
      payload: { products },
    }));
  });

  it('gets detail of the selected product', () => {
    const action = {
      payload: {
        id: 1,
      },
    };
    const gen = SAGAS.getProductDetails(action);
    const product = expect(gen.next().value).toEqual(
      call(API.getProductDetails, action.payload.id),
    );
    expect(gen.next().value).toEqual(delay(2000));
    expect(gen.next().value).toEqual(put({
      type: TYPES.PRODUCT_DETAILS_SUCCEEDED,
      payload: { product },
    }));
  });
});
