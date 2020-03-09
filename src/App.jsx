import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './store';

// Screens
import Home from './screens/Home/Home';
import ProductList from './screens/ProductList/ProductList';
import ProductDetails from './screens/ProductDetails/ProductDetails';

const Stack = createStackNavigator();


export default () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="ProductList" component={ProductList} options={{ title: 'Products' }} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);
