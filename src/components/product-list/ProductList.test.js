import React from 'react';
import ProductList from './ProductList';
import ProductCard from '../product-card/ProductCard';
import EmptyState from '../empty-state/EmptyState';
import Loading from '../loading/Loading';

const product = {
  key: 0,
  name: 'Product Name',
  caption: 'Some brief information',
  value: 120.00,
  img: 'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/132580/7/132580764_1GG.png',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
};

const mockClick = jest.fn();

describe('ProductList ', () => {
  it('should  have a Loading ', () => {
    let wrapper = shallow(<ProductList productCards={[]} loading={true} />);
    expect(wrapper.find(Loading).exists()).toEqual(true);
  });
  it('should not have a ProductCard ', () => {
    let wrapper = shallow(<ProductList productCards={[]} />);
    expect(wrapper.find(ProductCard).exists()).toEqual(false);
  });

  it('should have a EmptyState because the list is empty', () => {
    let wrapper = shallow(<ProductList productCards={[]} />);
    expect(wrapper.find(EmptyState).exists()).toEqual(true);
  });

  it('should have a EmptyState because the list is undefined', () => {
    let wrapper = shallow(<ProductList productCards={[]} />);
    expect(wrapper.find(EmptyState).exists()).toEqual(true);
  });

  it('should have a <div> with class tg-product-list', () => {
    let wrapper = shallow(<ProductList productCards={[product]} />);
    expect(wrapper.find('div.tg-product-list').exists()).toEqual(true);
  });

  it('should have a ProductCard ', () => {
    let wrapper = shallow(<ProductList productCards={[product]} />);
    expect(wrapper.find(ProductCard).length).toEqual(1);
  });

  it('should not have a <div> with class tg-product-pagination', () => {
    let wrapper = shallow(<ProductList productCards={[]} />);
    expect(wrapper.find('div.tg-product-pagination').exists()).toEqual(false);
  });

  it('should have a <div> with class tg-product-pagination', () => {
    let wrapper = shallow(<ProductList productCards={[product]} totalPages={2}/>);
    expect(wrapper.find('div.tg-product-pagination').exists()).toEqual(true);
  });

  it('should have a <button> with class tg-product-pagination-first if curerntPage > 1', () => {
    let wrapper = shallow(<ProductList productCards={[product]} currentPage={2} totalPages={2}/>);
    expect(wrapper.find('button.tg-product-pagination-first').exists()).toEqual(true);
  });

  it('should not have a <button> with class tg-product-pagination-first if curerntPage > 1', () => {
    let wrapper = shallow(<ProductList productCards={[product]} currentPage={1} totalPages={2}/>);
    expect(wrapper.find('button.tg-product-pagination-first').exists()).toEqual(false);
  });

  it('should not have a <button> with class tg-product-pagination-last if curerntPage < totalPages', () => {
    let wrapper = shallow(<ProductList productCards={[product]} currentPage={2} totalPages={2}/>);
    expect(wrapper.find('button.tg-product-pagination-last').exists()).toEqual(false);
  });

  it('should have a <button> with class tg-product-pagination-last if curerntPage < totalPages', () => {
    let wrapper = shallow(<ProductList productCards={[product]} currentPage={1} totalPages={2}/>);
    expect(wrapper.find('button.tg-product-pagination-last').exists()).toEqual(true);
  });

  it('should have a <button> with class tg-product-pagination-next ', () => {
    let wrapper = shallow(<ProductList productCards={[product]} currentPage={2} totalPages={2}/>);
    expect(wrapper.find('button.tg-product-pagination-next').exists()).toEqual(true);
  });

  it('should have a <button> with class tg-product-pagination-before ', () => {
    let wrapper = shallow(<ProductList productCards={[product]} currentPage={2} totalPages={2}/>);
    expect(wrapper.find('button.tg-product-pagination-before').exists()).toEqual(true);
  });
  
  it('should click on the first button ', () => {
    let wrapper = shallow(<ProductList totalPages={10} currentPage={2} paginationButtons={mockClick} productCards={[product]} />);
    wrapper.find('button.tg-product-pagination-first').simulate('click');
    expect(mockClick.mock.calls.length).toEqual(1);
  });

  it('should click on the before button ', () => {
    let wrapper = shallow(<ProductList totalPages={10} currentPage={2} paginationButtons={mockClick} productCards={[product]} />);
    wrapper.find('button.tg-product-pagination-before').simulate('click');
    expect(mockClick.mock.calls.length).toEqual(2);
  });

  it('should click on the next button ', () => {
    let wrapper = shallow(<ProductList totalPages={10} currentPage={2} paginationButtons={mockClick} productCards={[product]} />);
    wrapper.find('button.tg-product-pagination-next').simulate('click');
    expect(mockClick.mock.calls.length).toEqual(3);
  });

  it('should click on the last button ', () => {
    let wrapper = shallow(<ProductList totalPages={10} currentPage={2} paginationButtons={mockClick} productCards={[product]} />);
    wrapper.find('button.tg-product-pagination-last').simulate('click');
    expect(mockClick.mock.calls.length).toEqual(4);
  });
});