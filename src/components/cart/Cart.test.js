import React from "react";
import {Cart} from './Cart';
import CartItem from '../cart-item/CartItem';
import EmptyState from '../empty-state/EmptyState';

const item = {
  id: 0,
  img: "https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/132580/7/132580764_1GG.png",
  title: 'Product Name',
  value: 120.00,
  amount: 1
};

describe('Cart ', () => {
  
  it('should have a <div> with class tg-cart', () => {
    let wrapper = shallow(<Cart items={[item]} total={2}/>);
    expect(wrapper.find('div.tg-cart').exists()).toEqual(true);
  });
  it('should have 1 component CartItem', () => {
    let wrapper = shallow(<Cart items={[item]} total={2}/>);
    expect(wrapper.find(CartItem).length).toEqual(1);
  });
  it('should have a <span> with class tg-cart-total', () => {
    let wrapper = shallow(<Cart items={[item]} total={2}/>);
    expect(wrapper.find('span.tg-cart-total').exists()).toEqual(true);
  });
  it('should have an EmptyState component', () => {
    let wrapper = shallow(<Cart items={[]} total={2}/>);
    expect(wrapper.find(EmptyState).exists()).toEqual(true);
  });
  it('should have an EmptyState component', () => {
    let wrapper = shallow(<Cart />);
    expect(wrapper.find(EmptyState).exists()).toEqual(true);
  });
});