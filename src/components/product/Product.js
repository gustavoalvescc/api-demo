import React, {Component} from 'react';
import ProductView from './product-view/ProductView';
import DAO from '../../dao/DAO';
import MCartItem from '../../dao/models/MCartItem';

class Product extends Component{
  constructor(props){
    super(props);
    this.state = {
      product: {},
      loading: true
    }
  }

  componentDidMount(){
    DAO.getProduct(this.props.match.params.productId)
    .then((product) => {
      this.setState({product, loading: false});
    })
    .catch(error => {
      this.setState({loading: false});
    });
  }
  render(){
    let cartItem = new MCartItem(this.state.product.id, this.state.product.name, this.state.product.value, 1, this.state.product.img);
    return (
        <ProductView  product={this.state.product} cartItem={cartItem} loading={this.state.loading}/>
    );
  }
}

export default Product;