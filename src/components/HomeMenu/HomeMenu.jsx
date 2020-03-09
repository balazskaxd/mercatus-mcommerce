import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, StyleSheet } from 'react-native';
import MenuCard from '../MenuCard/MenuCard';

const styles = StyleSheet.create({
  scrollContainer: {
    width: '100%',
  },
  menuItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const menuItems = [
  { key: 1, title: 'Shop', screen: 'ProductList' },
];

const HomeMenu = ({ navigation }) => (
  <ScrollView style={styles.scrollContainer}>
    <View style={styles.menuItems}>
      {
        menuItems.map(({ key, title, screen }) => (
          <MenuCard key={key} title={title} navigate={() => navigation.navigate(screen)} />
        ))
      }
    </View>
  </ScrollView>
);

HomeMenu.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default HomeMenu;
