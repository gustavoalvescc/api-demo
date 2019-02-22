class MProductCard{
  constructor(id, name, caption, value, onSale, img){
    this.id = id;
    this.name = name;
    this.caption = caption;
    this.value = value;
    this.onSale = onSale;
    this.img = img;
  }

  toEqual(productCard){
    return productCard.id === this.id;
  }
}

export default MProductCard;