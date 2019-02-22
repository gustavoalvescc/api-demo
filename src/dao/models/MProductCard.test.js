import MProductCard from './MProductCard';

const productCard = {
  id:0,
  name: 'Product Name',
  caption: 'Product Caption',
  value: 0.0,
  onSale: false,
  img: ''
}

describe("Model Product Card ",() => {
  it("should be an empty object", ()=> {
    let m = new MProductCard();
    expect(m.id).toEqual(undefined);
  });
  it("testint the method to equal", ()=> {
    let m = new MProductCard();
    expect(m.toEqual(productCard)).toEqual(false);
  });
  it("should have the example object", ()=> {
    let m = new MProductCard(productCard.id, productCard.name, productCard.caption, productCard.value, productCard.onSale, productCard.img);
    expect(m.toEqual(productCard)).toEqual(true);
  });
});