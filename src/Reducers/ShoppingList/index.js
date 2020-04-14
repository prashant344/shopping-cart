import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SEARCH_PRODUCT,
  FILTER_PRODUCT,
  SORT_PRODUCT,
} from "../../Actions/ShoppingList";

const getCartItems = (state, product, operation) => {
  let newState = {};
  const existingItem = state.cartItems.find(
    (item) => item.name === product.name
  );
  if (existingItem) {
    const newCartItem = state.cartItems.map((item) => {
      var newItem = {};
      if (item.name === product.name) {
        newItem = {
          ...item,
          qty: operation === "decrement" ? item.qty - 1 : item.qty + 1,
        };
        return newItem;
      }
      return item;
    });
    newState = { ...state, cartItems: newCartItem };
  } else {
    const newItem = { ...product, qty: 1 };
    newState = { ...state, cartItems: [...state.cartItems, newItem] };
  }
  return newState;
};

export const cartItems = (state = [], action) => {
  var newState;
  switch (action.type) {
    case "ADD_TO_CART":
      if (!state.cartItems || !state.cartItems.length) {
        newState = { ...state, cartItems: [{ ...action.items, qty: 1 }] };
        return newState;
      } else {
        newState = getCartItems(state, action.items);
        return newState;
      }
    case "INCREMENT_QTY":
      newState = getCartItems(state, action.item);
      return newState;
    case "DECREMENT_QTY":
      newState = getCartItems(state, action.item, "decrement");
      return newState;
    case "REMOVE_PRODUCT":
      const cartItems = state.cartItems.filter(
        (item) => action.item.name !== item.name
      );
      newState = { ...state, cartItems };
      return newState;
    default:
      return state;
  }
};

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const productList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.items,
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };
    default:
      return state;
  }
};

export const searchText = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_PRODUCT:
      return { ...state, text: action.text };
    default:
      return state;
  }
};

export const filterValues = (state = {}, action) => {
  switch (action.type) {
    case FILTER_PRODUCT:
      return {
        ...state,
        filter: { lowerLimit: action.filter[0], upperLimit: action.filter[1] },
      };
    default:
      return state;
  }
};

export const sortValues = (state = {}, action) => {
  switch (action.type) {
    case SORT_PRODUCT:
      return {
        ...state,
        sort: action.sortBy,
      };
    default:
      return state;
  }
};
