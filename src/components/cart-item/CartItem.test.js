import React from "react";
import CartItem from './CartItem';

describe('Cart Item', () => {
  let item = {
    id: 0,
    img: "https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/132580/7/132580764_1GG.png",
    title: 'Product Name',
    value: 120.00,
    amount: 1
  };

  let mockClickRemove = jest.fn();
  let mockClickInc = jest.fn();
  let mockClickDec = jest.fn();

  let wrapper;
  beforeEach(() => wrapper = shallow(<CartItem {...item} decFunc={mockClickDec} incFunc={mockClickInc} removeFunc={mockClickRemove} />));
  it('should have a <div> with class tg-cart-item', () => {
    expect(wrapper.find('div.tg-cart-item').exists()).toEqual(true);
  });
  it('should have a <div> with class tg-cart-item-desciption', () => {
    expect(wrapper.find('div.tg-cart-item-desciption').exists()).toEqual(true);
  });
  it('should have a button with class tg-cart-item-delete', () => {
    expect(wrapper.find('button.tg-cart-item-delete').exists()).toEqual(true);
  });

  it('should have a span with class value $ 0.00', () => {
    item.value = '';
    let wrapperNew = shallow(<CartItem {...item} />)
    expect(wrapperNew.find('span.tg-cart-item-value').text()).toEqual('$ 0.00');
  });

  it('should simulate click on button delete', () => {
    wrapper.find('button.tg-cart-item-delete').simulate('click');
    expect(mockClickRemove.mock.calls.length).toEqual(1);
  });

  it('should simulate click on button increment', () => {
    wrapper.find('button.tg-cart-item-inc').simulate('click');
    expect(mockClickInc.mock.calls.length).toEqual(1);
  });

  it('should simulate click on button decrement', () => {
    let wrapperNew = shallow(<CartItem amount={2} decFunc={mockClickDec}/>)
    wrapperNew.find('button.tg-cart-item-dec').simulate('click');
    expect(mockClickDec.mock.calls.length).toEqual(1);
  });

});