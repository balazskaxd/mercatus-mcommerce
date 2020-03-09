import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './store';

// Screens
import HomeScreen from './screens/Home/Home';
import ProductListScreen from './screens/ProductList/ProductList';
import ProductDetailsScreen from './screens/ProductDetails/ProductDetails';
import CartScreen from './screens/Cart/Cart';

const Stack = createStackNavigator();


export default () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Products' }} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);
