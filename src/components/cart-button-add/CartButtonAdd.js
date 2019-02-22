import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {addCartItem} from '../../redux/actions';
import {connect} from 'react-redux';
import CartButtonAddView from './cart-button-add-view/CartButtonAddView';

export class CartButtonAdd extends Component{
  constructor(props){
    super(props);
    this.state = {success: false}
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.addCartItem(this.props.cartItem);
    this.setState({success: true});
  }
  render(){
    return(
      <CartButtonAddView addCartItem={this.handleClick} success={this.state.success} />
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({addCartItem}, dispatch);

export default connect(null,mapDispatchToProps)(CartButtonAdd);