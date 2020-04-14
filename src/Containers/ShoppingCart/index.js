import { connect } from 'react-redux';

import { incrementQty, decrementQty, removeProduct } from '../../Actions/ShoppingCart';
import ShoppingCart from '../../Components/ShoppingCart';

const mapDispatchToProps = (dispatch) => ({
    incrementQty: (item) => dispatch(incrementQty(item)),
    decrementQty: (item) => dispatch(decrementQty(item)),
    removeProduct: (item) => dispatch(removeProduct(item))
});

const mapStateToProps = (state) => ({
    products: state.cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
