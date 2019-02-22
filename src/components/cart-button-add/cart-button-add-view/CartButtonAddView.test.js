import React, {Component} from 'react';
import CartButtonAddView from './CartButtonAddView';

const click = jest.fn();
const cartItem = {};

describe('Cart Button Add View', () => {
  let wrapper = shallow(<CartButtonAddView cartItem={cartItem} addCartItem={click} />);
  //it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  it('should have a CartButtonAddView ', () => {
    let wrapper = shallow(<CartButtonAddView cartItem={cartItem} addCartItem={click} />);
    expect(wrapper.find('button').exists()).toEqual(true);
  });
  it('should have a span ', () => {
    let wrapper = shallow(<CartButtonAddView success={true} />);
    expect(wrapper.find('span.success.tg-product-cart-button').exists()).toEqual(true);
  });
  it('should simulate a button click ', () => {
    let wrapper = shallow(<CartButtonAddView cartItem={cartItem} addCartItem={click} />);
    wrapper.find("button").simulate('click')
    expect(click.mock.calls.length).toEqual(1);
  });

});

