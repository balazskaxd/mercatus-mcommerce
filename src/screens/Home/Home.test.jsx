import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import Home from './Home';

const props = {
  navigation: {
    navigate: jest.fn(),
  },
};

it('Home renders correctly', () => {
  renderer.create(<Home navigation={props.navigation} />);
});
