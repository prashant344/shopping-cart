export const incrementQty = (item) => ({
  type: "INCREMENT_QTY",
  item,
});

export const decrementQty = (item) => ({
  type: "DECREMENT_QTY",
  item,
});

export const removeProduct = (item) => ({
  type: "REMOVE_PRODUCT",
  item,
});
