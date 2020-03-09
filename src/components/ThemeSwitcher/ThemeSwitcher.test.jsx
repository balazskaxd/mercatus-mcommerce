import RNPickerSelect from 'react-native-picker-select';
import renderer from 'react-test-renderer';
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';


describe('ThemeSwitcher', () => {
  const props = {
    isDarkMode: true,
    onChange: jest.fn(),
  };

  it('ThemeSwitcher renders correctly', () => {
    renderer.create(
      <ThemeSwitcher isDarkMode={props.isDarkMode} onChange={props.onChange} />,
    );
  });

  it('test onChange functionality', () => {
    const wrapper = renderer.create(
      <ThemeSwitcher isDarkMode={props.isDarkMode} onChange={props.onChange} />,
    );
    wrapper.root.findByType(RNPickerSelect).props.onValueChange();
    expect(props.onChange).toHaveBeenCalledTimes(1);
  });
});
