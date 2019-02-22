import {CartReducer} from './CartReducer';
import deepFreeze from 'deep-freeze';

const initialState = {
  items: [],
  amount: 0,
  total: 0.0
}

const cartItem = {
  id:0,
  name: 'Product Name',
  value: 1.0,
  amount: 1,
  img: ''
}

const newState = {
  items: [cartItem],
  amount: 1,
  total: 1
}

describe("Cart Reducer ", () => {
  it("should return the initial state", () => {
    let state = CartReducer(undefined, {type: 'GET'});
    expect(state).toEqual(initialState);
  });

  it("should return a new array of items with a Cart Item", () => {
    deepFreeze(initialState);
    let state = CartReducer(initialState, {type: 'ADD_CART_ITEM', cartItem});
    expect(state).toEqual(newState);
  });

  it("should return the same array of items with Cart Item amount + 1", () => {
    let newCartItem = {...cartItem, amount: 2};
    deepFreeze(newState);
    deepFreeze(cartItem);

    let state = CartReducer(newState, {type: 'ADD_CART_ITEM', cartItem});
    expect(state).toEqual({items: [newCartItem], amount: 1, total: 2.00});
  });

  it("should return an empty array of items with amount 0", () => {
    deepFreeze(newState);
    
    let state = CartReducer(newState, {type: 'REMOVE_CART_ITEM', id:0});
    expect(state).toEqual(initialState);
  });

  it("should not delete the element since it does not have an id", () => {
    deepFreeze(newState);
    let state = CartReducer(newState, {type: 'REMOVE_CART_ITEM', id:1});
    expect(state).toEqual(newState);
  });

  it("should increment amount of specific cart item", () => {
    deepFreeze(newState);
    
    let newCartItem = {...cartItem, amount: 2};

    let state = CartReducer(newState, {type: 'INC_AMOUNT_CART_ITEM', id: 0});
    expect(state).toEqual({items: [newCartItem], amount: 1, total: 2.00});
  });

  it("should not increment amount of specific cart item because it does not found the id", () => {
    deepFreeze(newState);

    let state = CartReducer(newState, {type: 'INC_AMOUNT_CART_ITEM', id: 1});
    expect(state).toEqual(newState);
  });

  it("should decrement amount of specific cart item", () => {
    let newCartItem = {...cartItem, amount: 2};
    let differentState = {items:[newCartItem], amount: 1, total: 2.00};
    deepFreeze(differentState);

    let state = CartReducer(differentState, {type: 'DEC_AMOUNT_CART_ITEM', id: 0});
    expect(state).toEqual(newState);
  });

  it("should not increment amount of specific cart item because it does not found the id", () => {
    deepFreeze(newState);

    let state = CartReducer(newState, {type: 'DEC_AMOUNT_CART_ITEM', id: 1});
    expect(state).toEqual(newState);
  });
});