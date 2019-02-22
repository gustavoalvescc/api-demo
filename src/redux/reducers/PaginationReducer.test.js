import {PaginationReducer} from './PaginationReducer';
import deepFreeze from 'deep-freeze';

const initialState = {
  productCards: [],
  searchString: '',
  currentPage: 0,
  totalPages: 0
}

const newState = {
  productCards: [{
  id:1,
  name: 'Product 1',
  caption: 'Product 1',
  value: 2.0,
  onSale: true,
  img: ''}
  ],
  searchString: 'product',
  currentPage: 2,
  totalPages: 2
}

describe("Pagination Reducer ", () => {
  it("should return the initialState", () => {
    let state = PaginationReducer(undefined, {type: 'GET'});
    expect(state).toEqual(initialState);
  });
  it("should return the initialState", () => {
    deepFreeze(initialState);
    let state = PaginationReducer(initialState, {type: 'UPDATE_PAGINATION', newState});
    expect(state).toEqual(newState);
  });
});