import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import COLORS from '../../styles/colors';

const styles = StyleSheet.create({
  themeSwitcher: {
    width: '100%',
    paddingVertical: 18,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
});
const LIGHT_MODE = 'LIGHT_MODE';
const DARK_MODE = 'DARK_MODE';


const ThemeSwitcher = ({ isDarkMode, onChange }) => (
  <View style={{ ...styles.themeSwitcher, backgroundColor: isDarkMode ? COLORS.topaz : 'white' }}>
    <Text>App theme</Text>
    <View style={{ width: 120 }}>
      <RNPickerSelect
        value={isDarkMode ? DARK_MODE : LIGHT_MODE}
        onValueChange={(itemValue) => onChange(itemValue === DARK_MODE)}
        items={[
          { label: 'Light', value: LIGHT_MODE },
          { label: 'Dark', value: DARK_MODE },
        ]}
      />
    </View>
  </View>
);

ThemeSwitcher.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ThemeSwitcher;
