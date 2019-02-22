class MProduct{
  constructor(id, name, caption, description, value, onSale, img){
    this.id = id;
    this.name = name;
    this.caption = caption;
    this.description = description;
    this.value = value;
    this.onSale = onSale;
    this.img = img;
  }

  toEqual(product){
    return product.id === this.id;
  }
}

export default MProduct;