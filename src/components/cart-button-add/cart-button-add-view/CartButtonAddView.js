import React from 'react';

const CartButtonAddView = (props) => {
  return (props.success) ? 
  (<span className="tg-product-cart-button success">Added to Cart</span>)
  :
  (
    <button className="tg-product-cart-button" onClick={() => props.addCartItem()}>
        Add to Cart
      </button>
  )
}

export default CartButtonAddView;