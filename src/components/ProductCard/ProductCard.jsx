import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity, Text, StyleSheet, View,
} from 'react-native';
import COLORS from '../../styles/colors';

const styles = StyleSheet.create({
  productCard: {
    padding: 30,
    borderBottomWidth: 1,
    borderColor: COLORS.topaz,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
  },
});

const ProductCard = ({ product, navigate }) => (
  <TouchableOpacity
    style={styles.productCard}
    onPress={() => {
      navigate('ProductDetails', {
        itemId: product.id,
      });
    }}
  >
    <View>
      <Text style={styles.title}>{product.title}</Text>
    </View>
  </TouchableOpacity>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
  navigate: PropTypes.func.isRequired,
};

export default ProductCard;
