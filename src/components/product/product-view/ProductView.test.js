import React from "react";
import ProductView from './ProductView';
import CartButtonAdd from '../../cart-button-add/CartButtonAdd';
import EmptyState from '../../empty-state/EmptyState';
import Loading from '../../loading/Loading';
import ImageContainer from '../../image-container/ImageContainer';

describe('ProductView ', () => {
  const product = {
    key: 0,
    name: 'Product Name',
    caption: 'Some brief information',
    value: 120.00,
    img: 'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/132580/7/132580764_1GG.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
  let wrapper;
  beforeEach(() => wrapper = shallow(<ProductView product={product}/>));

  it('should have a <div> with class tg-product', () => {
    expect(wrapper.find('div.tg-product').exists()).toEqual(true);
  });
  it('should have a Image Container', () => {
    expect(wrapper.find(ImageContainer).exists()).toEqual(true);
  });
  it('should have a <h1> as product Title', () => {
    expect(wrapper.find('h1').exists()).toEqual(true);
  });
  it('should have a CartButtonAdd ', () => {
    expect(wrapper.find(CartButtonAdd).exists()).toEqual(true);
  });
  it('should have a <h2> as product description label ', () => {
    expect(wrapper.find('h2.tg-product-description-label').exists()).toEqual(true);
  });
  it('should have a <p> ', () => {
    expect(wrapper.find('p').exists()).toEqual(true);
  });

  it('should have an EmptyState component ', () => {
    let wrapperNew = shallow(<ProductView />);
    expect(wrapperNew.find(EmptyState).exists()).toEqual(true);
  });

  it('should have a Loading component ', () => {
    let wrapperNew = shallow(<ProductView loading={true} />);
    expect(wrapperNew.find(Loading).exists()).toEqual(true);
  });
});