export function addCartItem(cartItem) {
  return{
    type: 'ADD_CART_ITEM',
    cartItem
  };
};

export function removeCartItem(id) {
  return{
    type: 'REMOVE_CART_ITEM',
    id
  };
};

export function incAmountCartItem(id) {
  return{
    type: 'INC_AMOUNT_CART_ITEM',
    id
  };
};

export function decAmountCartItem(id) {
  return{
    type: 'DEC_AMOUNT_CART_ITEM',
    id
  };
};

export function updatePagination(newState) {
  return{
    type: 'UPDATE_PAGINATION',
    newState
  };
};