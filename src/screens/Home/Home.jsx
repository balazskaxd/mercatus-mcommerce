import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, StyleSheet } from 'react-native';
import MenuCard from '../../components/MenuCard/MenuCard';
import COLORS from '../../styles/colors';

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.kleinBlue,
  },
  scrollContainer: {
    width: '100%',
  },
  menuItems: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const menuItems = [
  { key: 1, title: 'Shop', screen: 'ProductList' },
];


const Home = ({ navigation }) => (
  <View style={styles.pageContainer}>
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.menuItems}>
        {
          menuItems.map(({ key, title, screen }) => (
            <MenuCard key={key} title={title} navigate={() => navigation.navigate(screen)} />
          ))
        }
      </View>
    </ScrollView>
  </View>
);

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Home;
