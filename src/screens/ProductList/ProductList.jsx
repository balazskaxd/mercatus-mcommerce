import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  ActivityIndicator, Text, TouchableOpacity, View,
} from 'react-native';
import { getProductList } from '../../action/productsActions';
import COLORS from '../../styles/colors';


export class ProductList extends React.Component {
  componentDidMount() {
    const { dispatchGetProductList } = this.props;
    dispatchGetProductList();
  }

  render() {
    const { navigation, products } = this.props;

    return (
      <TouchableOpacity
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        onPress={() => {
          navigation.navigate('ProductDetails', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      >
        {
          !products
          && (
            <ActivityIndicator size="large" color={COLORS.kleinBlue} />
          )
        }

        {
          products && products.map((product) => (
            <View key={product.id}>
              <Text>{product.title}</Text>
            </View>
          ))
        }
      </TouchableOpacity>
    );
  }
}

ProductList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  products: PropTypes.arrayOf(PropTypes.shape()),
  dispatchGetProductList: PropTypes.func.isRequired,
};

ProductList.defaultProps = {
  products: null,
};

const mapStateToProps = (state) => ({
  products: state.products.data,
});

const mapDispatchToProps = {
  dispatchGetProductList: getProductList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
