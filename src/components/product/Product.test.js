import React from "react";
import Product from './Product';
import ProductView from "./product-view/ProductView";
import DAO from "../../dao/DAO";

const match = {params: {productId: 0}};

const product = {
  key: 0,
  name: 'Product Name',
  caption: 'Some brief information',
  value: 120.00,
  img: 'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/132580/7/132580764_1GG.png',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

const mock = jest.fn().mockImplementation(() => {
  return new Promise((resolve, reject) => {
    resolve(product);
  });
});



describe('Product ', () => {

  it('should have a Product component', () => {
    DAO.getProduct = mock;
    let wrapper = shallow(<Product match={match}/>);
    expect(wrapper.containsMatchingElement(<ProductView />)).toEqual(true);
  });
  it('should have a Product component', () => {
    DAO.getProduct = mock;
    let wrapper = shallow(<Product match={match}/>);
    expect(wrapper.containsMatchingElement(<ProductView />)).toEqual(true);
  });
  it('should throuw exception', () => {
    DAO.getProduct = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => 
        {reject("error")}
      );
    });
    
    let wrapper = shallow(<Product match={match}/>);
    expect(wrapper.containsMatchingElement(<ProductView />)).toEqual(true);
  });
});