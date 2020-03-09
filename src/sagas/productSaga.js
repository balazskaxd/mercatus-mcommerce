import {
  takeEvery, call, put, delay,
} from 'redux-saga/effects';
import {
  PRODUCT_LIST_REQUESTED, PRODUCT_LIST_SUCCEEDED, PRODUCT_LIST_FAILED,
  PRODUCT_DETAILS_REQUESTED, PRODUCT_DETAILS_SUCCEEDED, PRODUCT_DETAILS_FAILED,
} from '../consts';
import * as API from '../api';

export function* getProductList() {
  try {
    const products = yield call(API.getProductList);
    yield delay(2000); // simulating request
    yield put({
      type: PRODUCT_LIST_SUCCEEDED,
      payload: {
        products,
      },
    });
  } catch (error) {
    console.log(error); // eslint-disable-line
    yield put({
      type: PRODUCT_LIST_FAILED,
    });
  }
}

export function* getProductDetails(action) {
  try {
    const product = yield call(API.getProductDetails, action.payload.id);
    yield delay(2000); // simulating request
    yield put({
      type: PRODUCT_DETAILS_SUCCEEDED,
      payload: {
        product,
      },
    });
  } catch (error) {
    console.log(error); // eslint-disable-line
    yield put({
      type: PRODUCT_DETAILS_FAILED,
    });
  }
}

export const productSaga = [
  takeEvery(PRODUCT_LIST_REQUESTED, getProductList),
  takeEvery(PRODUCT_DETAILS_REQUESTED, getProductDetails),
];
