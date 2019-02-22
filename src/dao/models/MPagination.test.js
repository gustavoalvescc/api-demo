import MPagination from './MPagination';

const pagination = {
  productCards: [{
  id:0,
  name: 'Product Name',
  caption: 'Product Caption',
  value: 0.0,
  onSale: false,
  img: ''}
  ],
  searchString: '',
  currentPage: 1,
  totalPages: 1
}

describe("Model Product Card ",() => {
  it("should be an empty object", ()=> {
    let m = new MPagination();
    expect(m.id).toEqual(undefined);
  });
  it("testing if it was constructor correctly", ()=> {
    let m = new MPagination(pagination.productCards, pagination.searchString, pagination.currentPage, pagination.totalPages);
    expect(m.productCards).toEqual(pagination.productCards);
  });
});