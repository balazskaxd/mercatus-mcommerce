import { Text, TouchableOpacity } from 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import MenuCard from './MenuCard';


describe('MenuCard', () => {
  const props = {
    title: 'Title',
    navigate: jest.fn(),
  };

  it('MenuCard renders correctly', () => {
    renderer.create(
      <MenuCard title={props.title} navigate={props.navigate} />,
    );
  });

  it('renders the correct text', () => {
    const wrapper = renderer.create(<MenuCard title={props.title} navigate={props.navigate} />);

    const textInst = wrapper.root.findByType(Text);
    expect(textInst.props.children).toBe(props.title);
  });

  it('test onPress functionality', () => {
    const wrapper = renderer.create(<MenuCard title={props.title} navigate={props.navigate} />);

    wrapper.root.findByType(TouchableOpacity).props.onPress();
    expect(props.navigate).toHaveBeenCalledTimes(1);
  });
});
