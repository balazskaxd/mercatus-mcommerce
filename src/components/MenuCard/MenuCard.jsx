import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import ThemeContext from '../../ThemeContext';
import COLORS from '../../styles/colors';

const styles = StyleSheet.create({
  menuCard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    width: 130,
    margin: 12,
    borderWidth: 1,
  },
  title: {
    fontSize: 22,
  },
});

class MenuCard extends React.Component {
  static contextType = ThemeContext; // eslint-disable-line

  render() {
    const { title, navigate } = this.props;
    const isDarkMode = this.context;

    return (
      <TouchableOpacity
        style={{
          ...styles.menuCard,
          backgroundColor: isDarkMode ? COLORS.asphalt : COLORS.kleinBlue,
          borderColor: isDarkMode ? COLORS.topaz : 'white',
        }}
        onPress={navigate}
      >
        <Text
          style={{ ...styles.title, color: isDarkMode ? COLORS.topaz : 'white' }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

MenuCard.propTypes = {
  title: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default MenuCard;
