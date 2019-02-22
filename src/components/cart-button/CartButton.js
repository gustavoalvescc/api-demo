import React, {Component} from 'react';
import {connect} from 'react-redux';
import CartButtonView from './cart-button-view/CartButtonView';

export class CartButton extends Component{
  render(){
    return(
      <CartButtonView amount={this.props.amount} />
    );
  }
}

const mapStateToProps = store => ({
  amount: store.CartReducer.amount
});

export default connect(mapStateToProps)(CartButton);