import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';


const ProductList = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>ProductList Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => {
        navigation.navigate('ProductDetails', {
          itemId: 86,
          otherParam: 'anything you want here',
        });
      }}
    />
  </View>
);

ProductList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default ProductList;
