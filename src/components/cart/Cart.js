import React, {Component} from 'react';
import CartItem from '../cart-item/CartItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {removeCartItem, incAmountCartItem, decAmountCartItem} from '../../redux/actions';
import EmptyState from '../empty-state/EmptyState';

export class Cart extends Component{
  render(){
    return (this.props.items && this.props.items.length>0) ?
    (
      <div className="tg-cart">
        {this.props.items.map((i) => <CartItem {...i} key={i.id} incFunc={this.props.incAmountCartItem} decFunc={this.props.decAmountCartItem} removeFunc={this.props.removeCartItem}/>)}
        <span className="tg-cart-total">$ {this.props.total.toFixed(2)}</span>
      </div>
    )
    :
    (<EmptyState />);
  }
} 

const mapStateToProps = store => ({
  items: store.CartReducer.items,
  total: store.CartReducer.total
});

const mapActionToProps = dispatch => bindActionCreators({removeCartItem, incAmountCartItem, decAmountCartItem}, dispatch);

export default connect(mapStateToProps,mapActionToProps)(Cart);