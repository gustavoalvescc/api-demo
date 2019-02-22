import React, {Component} from 'react';
import ProductCard from '../product-card/ProductCard';
import MCartItem from '../../dao/models/MCartItem';
import EmptyState from '../empty-state/EmptyState';
import Loading from '../loading/Loading';

class ProductList extends Component{
 render() {
   let pagination = (
    <div className="tg-product-pagination">
      {this.props.currentPage>1 && 
        <button onClick={() => this.props.paginationButtons(0)} className="tg-product-pagination-first">First<i className="fas fa-angle-double-left"></i></button>}
      <button onClick={() => this.props.paginationButtons(1)} className="tg-product-pagination-before">Before<i className="fas fa-angle-left"></i></button>
      <span>{this.props.currentPage} of {this.props.totalPages}</span>
      <button onClick={() => this.props.paginationButtons(2)} className="tg-product-pagination-next">Next<i className="fas fa-angle-right"></i></button>
      {this.props.currentPage < this.props.totalPages && 
        <button onClick={() => this.props.paginationButtons(3)} className="tg-product-pagination-last">Last<i className="fas fa-angle-double-right"></i></button>}
    </div>
   );

  return (this.props.loading) ? 
  (<Loading />)
  : (this.props.productCards && this.props.productCards.length > 0) ?
      (
        <div className="tg-product-list">

          {this.props.productCards.map((p) => {
            let cartItem = new MCartItem(p.id, p.name, p.value, 1, p.img);
              return <ProductCard key={p.id} cartItem={cartItem} {...p}/>
            })
          }
          
          {this.props.totalPages > 1 && pagination}
        </div>
      )
    : (<EmptyState reload={this.props.emptyState}/>)
 }
}


export default ProductList;