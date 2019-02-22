import React from "react";
import CartButtonView from './CartButtonView';

describe('Cart Button View ', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<CartButtonView />));
  //it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  it('should have a Link component with class tg-cart-button', () => {
    expect(wrapper.find('Link').hasClass('tg-cart-button')).toEqual(true);
  });
  it('should have <i> with class material-icons', () => {
    expect(wrapper.find('i').hasClass('fa-shopping-cart')).toEqual(true);
  });
  it('should have <span> with class tg-cart-button-counter', () => {
    expect(wrapper.find('span').hasClass('tg-cart-button-counter')).toEqual(true);
  });
});