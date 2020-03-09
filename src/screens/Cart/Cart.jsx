import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';


const Cart = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Your cart is empty</Text>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>
);

Cart.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default Cart;
