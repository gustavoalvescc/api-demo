import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CartButtonAdd from '../cart-button-add/CartButtonAdd';
import ImageContainer from '../image-container/ImageContainer';

const ProductCard = (props) => {
  return (
    <div className="tg-product-card">
      <Link to={`/product/${props.id}`} className="tg-product-card-content">
        <ImageContainer className="tg-product-card-image" alt={props.name} src={props.img} />
        <div className="tg-product-card-text">
        <span className="tg-product-card-title">{props.name}</span>
        {props.caption && <small className="tg-product-card-caption">{props.caption}</small>}
        <span className="tg-product-card-value">${props.value.toFixed(2)}</span>
        </div>
      </Link>
      <CartButtonAdd cartItem={props.cartItem}/>
    </div>
  );
}

ProductCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  caption: PropTypes.string,
  value: PropTypes.number,
  onClick: PropTypes.func
}

export default ProductCard;