import MCartItem from './MCartItem';

const productItem = {
  id:0,
  name: 'Product Name',
  value: 0.0,
  amount: 0,
  img: ''
}

describe("Model Cart Item ", () => {
  it("should be an empty object", ()=>{
    let m = new MCartItem();
    expect(m.id).toEqual(undefined);
  });
  it("testing the method to equal", ()=> {
    let m = new MCartItem();
    expect(m.toEqual(productItem)).toEqual(false);
  });
  it("should have the example object", ()=> {
    let m = new MCartItem(productItem.id, productItem.name, productItem.value, productItem.amount, productItem.img);
    expect(m.toEqual(productItem)).toEqual(true);
  });
});