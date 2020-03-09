import React from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, Text, Picker,
} from 'react-native';
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
    <Picker
      selectedValue={isDarkMode ? DARK_MODE : LIGHT_MODE}
      style={{ height: 50, width: 100 }}
      onValueChange={(itemValue) => onChange(itemValue === DARK_MODE)}
    >
      <Picker.Item label="Light" value={LIGHT_MODE} />
      <Picker.Item label="Dark" value={DARK_MODE} />
    </Picker>
  </View>
);

ThemeSwitcher.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ThemeSwitcher;
