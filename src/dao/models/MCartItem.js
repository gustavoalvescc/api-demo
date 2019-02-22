class MCartItem{
  constructor(id, name, value, amount, img){
    this.id = id;
    this.name = name;
    this.value = value;
    this.amount = amount;
    this.img = img;
  }

  toEqual(cartItem){
    return cartItem.id === this.id;
  }
}

export default MCartItem;