import React from 'react';
import CartButtonAdd from '../../cart-button-add/CartButtonAdd';
import EmptyState from '../../empty-state/EmptyState';
import Loading from '../../loading/Loading';
import ImageContainer from '../../image-container/ImageContainer';

const ProductView = (props) => {
  return (props.loading) ?
    (<Loading />)
    :
    (props.product && props.product.name) ?
    (
      <div className="tg-product">
        <div className="tg-product-content">
        <ImageContainer className="tg-product-image" src={props.product.img} alt={props.product.name}/>
        <div className="tg-product-text">
        <h1 className="tg-product-name">{props.product.name}</h1>
        <h2 className="tg-product-caption">{props.product.caption}</h2>
        <span className="tg-product-value">$ {props.product.value.toFixed(2)}</span>
        <CartButtonAdd cartItem={props.cartItem} />
        </div>
        </div>
        <h2 className="tg-product-description-label">Description:</h2>
        <p className="tg-product-description">{props.product.description}</p>
      </div>
    )
    :
    (<EmptyState />)
}

export default ProductView;