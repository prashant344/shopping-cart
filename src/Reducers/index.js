import { combineReducers } from 'redux'
import { cartItems, productList, searchText, filterValues, sortValues } from './ShoppingList';

export default combineReducers({
  cartItems,
  productList,
  searchText,
  filterValues,
  sortValues,
});
