/**
 * @format
 */

import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import ProductDetails from './ProductDetails';

const props = {
  route: {
    params: {
      itemId: 21,
      otherParam: 'test param',
    },
  },
  navigation: {
    navigate: jest.fn(),
  },
};

it('ProductDetails renders correctly', () => {
  renderer.create(<ProductDetails route={props.route} navigation={props.navigation} />);
});
