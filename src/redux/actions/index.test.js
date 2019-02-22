import * as actions from './index.js';

const cartItem = {
  id:0,
  name: 'Product Name',
  value: 0.0,
  amount: 0,
  img: ''
};

const id = 0;

const paginationState = {
  productCards: [],
  currentPage: 0,
  totalPages: 0
};

describe('Actions ', () => {
  it('should create an action to add a cartItem', () => {
    
    const expectedAction = {
      type: 'ADD_CART_ITEM',
      cartItem
    };
    expect(actions.addCartItem(cartItem)).toEqual(expectedAction);
  });
  it('should create an action to remove a cartItem', () => {
    
    const expectedAction = {
      type: 'REMOVE_CART_ITEM',
      id
    };
    expect(actions.removeCartItem(id)).toEqual(expectedAction);
  });
  it('should create an action to increment the amount of specific cartItem', () => {
    
    const expectedAction = {
      type: 'INC_AMOUNT_CART_ITEM',
      id
    };
    expect(actions.incAmountCartItem(id)).toEqual(expectedAction);
  });
  it('should create an action to decrement the amount of specific cartItem', () => {
    
    const expectedAction = {
      type: 'DEC_AMOUNT_CART_ITEM',
      id
    };
    expect(actions.decAmountCartItem(id)).toEqual(expectedAction);
  });
  it('should create an action to update the pagination object', () => {
    
    const expectedAction = {
      type: 'UPDATE_PAGINATION',
      newState: paginationState
    };
    expect(actions.updatePagination(paginationState)).toEqual(expectedAction);
  })
})