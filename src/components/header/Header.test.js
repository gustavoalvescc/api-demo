import React from 'react';
import Header from './Header';
import CartButton from '../cart-button/CartButton';
import { wrap } from 'module';

describe('Header', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Header />));
  //it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  it('should have a header HTML component', () => {
    expect(wrapper.find('header').hasClass('tg-header')).toEqual(true);
  });
  it('should have a logo', () => {
    let img = <img alt="Logo" />
    expect(wrapper.contains(img)).toEqual(true);
  });
  it('should have a title', () => {
    expect(wrapper.find('Link').hasClass('tg-home')).toEqual(true);
  });
  it('should have a component Cart Button', () => {
    expect(wrapper.containsMatchingElement(<CartButton />)).toEqual(true);
  });
});