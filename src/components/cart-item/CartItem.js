import React from 'react';
import ImageContainer from '../image-container/ImageContainer';

const CartItem = (props) => {
  return (
    <div className="tg-cart-item">
      <ImageContainer className="tg-cart-item-image" src={props.img} alt={props.name}/>
        <div className="tg-cart-item-desciption">
            <span className="tg-block tg-cart-item-name">{props.name}</span>
            <div className="tg-cart-item-group">
            <span className="tg-cart-item-value">$ {(props.value)? props.value.toFixed(2) : 0.0.toFixed(2)}</span>
            <div className="tg-cart-item-actions">
                <button className="tg-cart-item-dec" onClick={() => props.amount>1 && props.decFunc(props.id)}>
                    Increase ammount of product
                    <i className="fas fa-angle-down"></i>
                </button>
                <span>{props.amount}</span>
                <button className="tg-cart-item-inc" onClick={() => props.incFunc(props.id)}>
                    Decrease ammount of product
                    <i className="fas fa-angle-up"></i>
                </button>   
            </div>
            <button className="tg-cart-item-delete" onClick={() => props.removeFunc(props.id)}>
                Remove product
                <i className="fas fa-trash-alt"></i>
            </button>
            </div>
        </div>
    </div>
  );
}

export default CartItem;