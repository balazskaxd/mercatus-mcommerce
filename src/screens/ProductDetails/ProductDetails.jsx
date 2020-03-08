import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';


const ProductDetails = ({ route, navigation }) => {
  const { itemId } = route.params;
  const { otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ProductDetails Screen</Text>
      <Text>{`itemId: ${JSON.stringify(itemId)}`}</Text>
      <Text>{`otherParam: ${JSON.stringify(otherParam)}`}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

ProductDetails.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      itemId: PropTypes.number,
      otherParam: PropTypes.string,
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default ProductDetails;
