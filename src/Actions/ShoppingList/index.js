export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
export const FILTER_PRODUCT = 'FILTER_PRODUCT';
export const SORT_PRODUCT = 'SORT_PRODUCT';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = items => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { items }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export const addToCart = (items) => ({
  type: ADD_TO_CART,
  items,
});

export const searchProduct = (text, items) => ({
  type: SEARCH_PRODUCT,
  text,
  items,
});

export const filterProduct = (filter) => ({
  type: FILTER_PRODUCT,
  filter,
});

export const sortProduct = (sortBy) => ({
  type: SORT_PRODUCT,
  sortBy,
})