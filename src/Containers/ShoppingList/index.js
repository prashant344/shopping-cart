import { connect } from "react-redux";
import {
  addToCart,
  fetchProductsBegin,
  fetchProductsSuccess,
  fetchProductsFailure,
  filterProduct,
} from "../../Actions/ShoppingList";
import ShoppingList from "../../Components/ShoppingList";

function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductsBegin());
    return fetch("https://api.jsonbin.io/b/5e8c3aafaf7c476bc47e47a3")
      .then(handleErrors)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchProductsSuccess(data.items));
        return data.products;
      })
      .catch((error) => dispatch(fetchProductsFailure(error)));
  };
}
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
  productList: state.productList,
  searchText: state.searchText,
  filter: state.filterValues,
  sort: state.sortValues,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (items) => dispatch(addToCart(items)),
  fetchProductList: () => dispatch(fetchProducts()),
  filterProduct: (filter) => dispatch(filterProduct(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
