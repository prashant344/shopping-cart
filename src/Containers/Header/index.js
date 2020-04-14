import { connect } from 'react-redux';

import { searchProduct } from '../../Actions/ShoppingList';
import Header from '../../Components/Header';

const mapDispatchToProps = (dispatch) => ({
    searchProduct: (text, items) => dispatch(searchProduct(text, items))
})
const mapStateToProps = (state) => ({
    items: state.cartItems.cartItems,
    products: state.productList.items
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);
