import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityIndicator, View } from 'react-native';
import { getProductList } from '../../action/productsActions';
import ProductCard from '../../components/ProductCard/ProductCard';
import COLORS from '../../styles/colors';


export class ProductList extends React.Component {
  componentDidMount() {
    const { dispatchGetProductList } = this.props;
    dispatchGetProductList();
  }

  render() {
    const { navigation, products } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {
          !products
          && (
            <ActivityIndicator size="large" color={COLORS.kleinBlue} />
          )
        }

        {
          products && products.map((product) => (
            <ProductCard key={product.id} product={product} navigate={navigation.navigate} />
          ))
        }
      </View>
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
