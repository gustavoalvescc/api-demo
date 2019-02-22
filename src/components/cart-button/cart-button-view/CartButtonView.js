import React from 'react';
import {Link} from 'react-router-dom';

 const CartButtonView = (props) => {
    return(
      <Link to="/cart" className="tg-cart-button">
        Cart Button
        <i className="fas fa-shopping-cart"></i>
        <span className="tg-cart-button-counter">{props.amount}</span>
      </Link>
    );
  }

  export default CartButtonView;