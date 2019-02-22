import MProductCard from "./models/MProductCard";
import MProduct from "./models/MProduct";
import MPagination from './models/MPagination';

const API_KEY = "";

class DAO {
  static getMostPopular(){
    let url = `https://api.bestbuy.com/beta/products/mostViewed?show=sku,name,shortDescription,salePrice,onSale,thumbnailImage&apiKey=${API_KEY}&format=json`;
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(response=>response.json())
      .then(list => list.results.map(r => `sku=${r.sku}`).join("|"))
      .then(skus => this.getProducts(skus))
      .then(products => {
        let pagination = new MPagination(products, '', 1, 1);
        resolve(pagination);
      })
      .catch(error => {reject(error)});
    });
  }
  static getProducts(skus){
    let url = `https://api.bestbuy.com/v1/products(${skus})?show=sku,name,shortDescription,longDescription,salePrice,onSale,image&pageSize=12&apiKey=${API_KEY}&format=json`;
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(response=>response.json())
      .then(list => {
        let result = list.products.map(elem => new MProductCard(elem.sku, elem.name, elem.shortDescription, elem.salePrice, elem.onSale, elem.image));
        resolve(result)
      })
      .catch(error => {reject(error)});
    });
  }
  
  static getProduct(productId){
    let url = `https://api.bestbuy.com/v1/products/${productId}.json?show=sku,name,shortDescription,longDescription,salePrice,onSale,image&apiKey=${API_KEY}`;
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(response=>response.json())
      .then(product => {
        let result = new MProduct(product.sku, product.name, product.shortDescription, product.longDescription, product.salePrice, product.onSale, product.image);
        resolve(result)
      })
      .catch(error => {reject(error)});
    });
    
  }
  static searchProduct(search, page=1){
    if (!search) return this.getMostPopular();
    let stringSearch = search.split(' ').map(elem => `name=${elem}*`).join("&");
    let url = `
    https://api.bestbuy.com/v1/products(${stringSearch})?show=sku,name,shortDescription,longDescription,salePrice,onSale,image&pageSize=12&page=${page}&apiKey=${API_KEY}&format=json`;
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(response=>response.json())
      .then(list => {
        let listProducts = list.products.map(elem => new MProductCard(elem.sku, elem.name, elem.shortDescription, elem.salePrice, elem.onSale, elem.image));
        let pagination = new MPagination(listProducts, search, page, list.totalPages);
        resolve(pagination);
      })
      .catch(error => {reject(error)});
    });
    
  }
}

export default DAO;