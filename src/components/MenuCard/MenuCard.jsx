import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  menuCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    width: 130,
    margin: 12,
    borderWidth: 1,
    borderColor: 'white',
  },
  title: {
    color: 'white',
    fontSize: 22,
  },
});

const MenuCard = ({ title, navigate }) => (
  <TouchableOpacity style={styles.menuCard} onPress={() => navigate()}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

MenuCard.propTypes = {
  title: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default MenuCard;
