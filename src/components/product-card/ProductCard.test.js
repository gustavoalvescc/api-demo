import React from "react";
import ProductCard from './ProductCard';
import {MemoryRouter as Router} from 'react-router-dom';
import {Store} from '../../redux/store';
import {Provider} from 'react-redux';
import CartButtonAdd from '../cart-button-add/CartButtonAdd';
import ImageContainer from '../image-container/ImageContainer';

const initialState = {
  items: [],
  amount: 0
}

describe('Product Card ', () => {
  let wrapper;
  const context = {router: {isActive: (a, b) => true}};
  const mockClick = jest.fn();
  const prop = {
      key: 0,
      title: 'Product Name',
      caption: 'Some brief information',
      value: 120.00,
      img: 'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/132580/7/132580764_1GG.png',
      cartItem: {}
    };

  //Had to user provider because I needed to Mount because of the Router
  beforeEach(() => wrapper = mount(<Provider store={Store}><Router><ProductCard {...prop}  /></Router></Provider>));

  it('should have a <div> with class tg-product-card', () => {
    expect(wrapper.find('div.tg-product-card').exists()).toEqual(true);
  });

  it('should have a Link with class tg-product-card-content', () => {
    expect(wrapper.find('Link').hasClass('tg-product-card-content')).toEqual(true);
  });

  it('should have a Image Container ', () => {
    expect(wrapper.find(ImageContainer).exists()).toEqual(true);
  });

  it('should have a <span> with class tg-product-card-title', () => {
    expect(wrapper.find('span.tg-product-card-title').exists()).toEqual(true);
  });

  it('should have a <div> with class tg-product-card-text', () => {
    expect(wrapper.find('div.tg-product-card-text').exists()).toEqual(true);
  });

  it('should have a <small> with class tg-product-card-caption', () => {
    expect(wrapper.find('small.tg-product-card-caption').exists()).toEqual(true);
  });

  it('should have a <span> with class tg-product-card-value', () => {
    expect(wrapper.find('span.tg-product-card-value').exists()).toEqual(true);
  });

  it('should have a CartButtonAdd', () => {
    expect(wrapper.find(CartButtonAdd).exists()).toEqual(true);
  });
});