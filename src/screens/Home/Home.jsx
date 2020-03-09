import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { ThemeProvider } from '../../ThemeContext';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';
import HomeMenu from '../../components/HomeMenu/HomeMenu';
import COLORS from '../../styles/colors';

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    width: '100%',
  },
  menuItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});


const Home = ({ navigation }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider value={isDarkMode}>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            ...styles.pageContainer,
            backgroundColor: isDarkMode ? COLORS.tolopea : COLORS.kleinBlue,
          }}
        >
          <ThemeSwitcher isDarkMode={isDarkMode} onChange={setDarkMode} />
          <HomeMenu navigation={navigation} />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Home;
