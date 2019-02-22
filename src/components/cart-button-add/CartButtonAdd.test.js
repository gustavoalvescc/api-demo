import React, {Component} from 'react';
import {CartButtonAdd} from './CartButtonAdd';
import CartButtonAddView from './cart-button-add-view/CartButtonAddView';

const click = jest.fn();
const cartItem = {};

describe('Cart Button Add', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<CartButtonAdd cartItem={cartItem} addCartItem={click} />));
  //it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  it('should have a CartButtonAddView ', () => {
    expect(wrapper.find(CartButtonAddView).exists()).toEqual(true);
  });
  it("should have the state success ", () => {
    wrapper.instance().handleClick();
    expect(wrapper.state().success).toEqual(true);
  });

});