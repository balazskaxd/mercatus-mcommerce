/**
 * @format
 */

import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import ProductList from './ProductList';

const props = {
  navigation: {
    navigate: jest.fn(),
  },
};

it('ProductList renders correctly', () => {
  renderer.create(<ProductList navigation={props.navigation} />);
});
