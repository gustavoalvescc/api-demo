import React from "react";
import {Search} from './Search';
import DAO from "../../dao/DAO";
import SearchView from './search-view/SearchView';
import ProductList from '../product-list/ProductList';
import MPagination from '../../dao/models/MPagination';

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
    let result = new MPagination([product], 'Search', 1, 2);
    resolve(result);
  });
});
const mockError = jest.fn().mockImplementation(() => {
  return new Promise((resolve, reject) => {
    reject("Error");
  });
});

const mockFn = jest.fn();

describe('Search ', () => {

  it('should have a SearchView component', () => {
    DAO.getMostPopular = mock;
    let wrapper = shallow(<Search searchString="" updatePagination={mockFn} productCards={[]}/>);
    expect(wrapper.find(SearchView).exists()).toEqual(true);
  });

  it('should have a ProductList component', () => {
    DAO.getMostPopular = mock;
    let wrapper = shallow(<Search searchString="" updatePagination={mockFn} productCards={[]}/>);
    expect(wrapper.find(ProductList).exists()).toEqual(true);
  });

  it('should throw a error', () => {
    DAO.getMostPopular = mockError;
    let wrapper = shallow(<Search searchString="" updatePagination={mockFn} productCards={[]}/>);
    expect(wrapper.find(ProductList).exists()).toEqual(true);
  });

  it('should set state', () => {
    DAO.getMostPopular = mockError;
    let wrapper = shallow(<Search searchString="Test" updatePagination={mockFn} productCards={[product]}/>);
    expect(wrapper.instance().state.pagination.searchString).toEqual("Test");
  });

  it('should search products', () => {
    DAO.searchProduct = mock;
    let wrapper = shallow(<Search searchString="Test" updatePagination={mockFn} productCards={[product]}/>);
    wrapper.instance().searchProducts('Test');
    expect(wrapper.instance().state.pagination.searchString).toEqual('Test');
  });

  it('should not search products', () => {
    DAO.searchProduct = mockError;
    let wrapper = shallow(<Search searchString="Test" updatePagination={mockFn} productCards={[product]}/>);
    wrapper.instance().searchProducts('Test');
    expect(wrapper.instance().state.pagination.searchString).toEqual("Test");
  });

  it('should change the search string', () => {
    DAO.searchProduct = mock;
    let wrapper = shallow(<Search searchString="Test" updatePagination={mockFn} productCards={[product]}/>);
    wrapper.instance().handleChange({target: {value: 'New String'}});
    expect(wrapper.instance().state.pagination.searchString).toEqual("New String");
  });

  it('should handle the submit', () => {
    DAO.searchProduct = mock;
    let wrapper = shallow(<Search searchString="Test" updatePagination={mockFn} productCards={[product]}/>);
    wrapper.instance().handleSubmit({preventDefault: jest.fn()});
    expect(wrapper.instance().state.pagination.searchString).toEqual("Test");
  });

  it('should search with the first page', () => {
    DAO.searchProduct = mock;
    let wrapper = shallow(<Search searchString="Test" updatePagination={mockFn} productCards={[product]} totalPages={10} currentPage={2}/>);
    wrapper.instance().handleChangePage(0);
    expect(wrapper.instance().state.pagination.searchString).toEqual("Test");
  });

  it('should search with the first page', () => {
    DAO.searchProduct = mock;
    let wrapper = shallow(<Search searchString="Test" updatePagination={mockFn} productCards={[product]} totalPages={10} currentPage={2}/>);
    wrapper.instance().handleChangePage();
    expect(wrapper.instance().state.pagination.searchString).toEqual("Test");
  });

  it('should search with the before page', () => {
    DAO.searchProduct = mock;
    let wrapper = shallow(<Search searchString="Test" updatePagination={mockFn} productCards={[product]} totalPages={10} currentPage={2}/>);
    wrapper.instance().handleChangePage(1);
    expect(wrapper.instance().state.pagination.searchString).toEqual("Test");
  });

  it('should not search with the before page', () => {
    DAO.searchProduct = mock;
    let wrapper = shallow(<Search searchString="Test" updatePagination={mockFn} productCards={[product]} totalPages={10} currentPage={1}/>);
    wrapper.instance().handleChangePage(1);
    expect(wrapper.instance().state.pagination.searchString).toEqual("Test");
  });

  it('should search with the next page', () => {
    DAO.searchProduct = mock;
    let wrapper = shallow(<Search searchString="Test" updatePagination={mockFn} productCards={[product]} totalPages={10} currentPage={2}/>);
    wrapper.instance().handleChangePage(2);
    expect(wrapper.instance().state.pagination.searchString).toEqual("Test");
  });

  it('should search with the last page', () => {
    DAO.searchProduct = mock;
    let wrapper = shallow(<Search searchString="Test" updatePagination={mockFn} productCards={[product]} totalPages={10} currentPage={2}/>);
    wrapper.instance().handleChangePage(3);
    expect(wrapper.instance().state.pagination.searchString).toEqual("Test");
  });

  it('should not search with the next page', () => {
    DAO.searchProduct = mock;
    let wrapper = shallow(<Search searchString="Test" updatePagination={mockFn} productCards={[product]} totalPages={10} currentPage={10}/>);
    wrapper.instance().handleChangePage(2);
    expect(wrapper.instance().state.pagination.searchString).toEqual("Test");
  });

});