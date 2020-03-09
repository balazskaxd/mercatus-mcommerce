import { Picker } from 'react-native';
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
    ).toJSON();
  });


  it('test onChange functionality', () => {
    const wrapper = renderer.create(
      <ThemeSwitcher isDarkMode={props.isDarkMode} onChange={props.onChange} />,
    );

    wrapper.root.findByType(Picker).props.onValueChange();
    expect(props.onChange).toHaveBeenCalledTimes(1);
  });
});
