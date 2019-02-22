import MProduct from './MProduct';

const product = {
  id:0,
  name: 'Product Name',
  caption: 'Product Caption',
  description: 'Product description',
  value: 0.0,
  onSale: false,
  img: ''
}

describe("Model product ",() => {
  it("should be an empty object", ()=> {
    let m = new MProduct();
    expect(m.id).toEqual(undefined);
  });
  it("testint the method to equal", ()=> {
    let m = new MProduct();
    expect(m.toEqual(product)).toEqual(false);
  });
  it("should have the example object", ()=> {
    let m = new MProduct(product.id, product.name, product.caption, product.description, product.value, product.onSale, product.img);
    expect(m.toEqual(product)).toEqual(true);
  });
});