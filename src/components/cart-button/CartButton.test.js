import React from 'react';
import {CartButton} from './CartButton';
import CartButtonView from './cart-button-view/CartButtonView';

describe('Cart Button', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<CartButton />));
  //it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  it('should have a CartButtonView component', () => {
    expect(wrapper.find(CartButtonView).exists()).toEqual(true);
  });
});