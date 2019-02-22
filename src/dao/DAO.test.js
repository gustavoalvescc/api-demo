import DAO from './DAO';
import MPagination from '../dao/models/MPagination';

const product = {
  sku: 0,
  name: 'Product Name',
  shorDescription: 'Some brief information',
  salePrice: 120.00,
  onSale: true,
  image: 'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/132580/7/132580764_1GG.png',
  longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

const mockPopulars = jest.fn().mockImplementation(() => {
  return new Promise((resolve, reject) => {
    let json = function(){
      return {results: [product]};
    }
    resolve({json});
  });
});

const mockProducts = jest.fn().mockImplementation(() => {
  return new Promise((resolve, reject) => {
    let json = function(){
      return {products: [product]};
    }
    resolve({json});
  });
});

const mockProductsPure = jest.fn().mockImplementation(() => {
  return new Promise((resolve, reject) => {
    resolve([product]);
  });
});

const mockProduct = jest.fn().mockImplementation(() => {
  let json = function(){
    return product;
  }
  return new Promise((resolve, reject) => {
    resolve({json});
  });
});

const mockError = jest.fn().mockImplementation(() => {
  return new Promise((resolve, reject) => {
    reject("Error");
  });
});

describe('DAO ', () => {
  it('should return a product', () => {
    global.fetch = mockProduct;
    DAO.getProduct(1).then(p => {
      expect(p.id).toEqual(product.sku);
    });
  });

  it('should not return a product', () => {
    global.fetch = mockError;
    DAO.getProduct(1).catch(e => {
      expect(e).toEqual("Error");
    });
  });

  it('should return a list of product', () => {
    global.fetch = mockProducts;
    DAO.getProducts(1).then(list => {
      expect(list.length).toEqual(1);
    });
  });

  it('should not return a list of product', () => {
    global.fetch = mockError;
    DAO.getProducts(1).catch(list => {
      expect(e).toEqual("Error");
    });
  });

  it('should return a list of Pagination', () => {
    global.fetch = mockPopulars;
    DAO.getProducts = mockProductsPure;
    DAO.getMostPopular().then(pagination => {
      expect(pagination.productCards.length).toEqual(1);
    });
    
  });

  it('should not return a list of Pagination', () => {
    global.fetch = mockError;
    DAO.getMostPopular().catch(error => {
      expect(error).toEqual("Error");
    });
    
  });

  it('should return a list of Pagination for search from Most Populars', () => {
    global.fetch = mockPopulars;
    DAO.getProducts = mockProductsPure;
    DAO.searchProduct('').then(pagination => {
      expect(pagination.productCards.length).toEqual(1);
    });
  });

  it('should return a list of Pagination for search from Fetch', () => {
    global.fetch = mockProducts;
    DAO.searchProduct('as').then(pagination => {
      expect(pagination.productCards.length).toEqual(1);
    });
  });

  it('should not return a list of Pagination for search from Fetch', () => {
    global.fetch = mockError;
    DAO.searchProduct('as').catch(error => {
      expect(error).toEqual("Error");
    });
  });

});