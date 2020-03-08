import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import ProductList from './screens/ProductList/ProductList';
import ProductDetails from './screens/ProductDetails/ProductDetails';

const Stack = createStackNavigator();


export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  </NavigationContainer>
);
