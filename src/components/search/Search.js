import React, {Component} from 'react';
import ProductList from '../product-list/ProductList';
import SearchView from './search-view/SearchView';
import DAO from '../../dao/DAO';
import MPagination from '../../dao/models/MPagination';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updatePagination} from '../../redux/actions';

export class Search extends Component{
  constructor(props){
    super(props);
    this.state = {
      pagination: new MPagination([],'',0,0),
      loading: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
  }

  searchProducts(searchString, page=1){
    this.setState({loading: true});
    DAO.searchProduct(searchString, page)
      .then(pagination => {
        //Update store
        this.props.updatePagination(pagination);
        this.setState({
          pagination,
          loading: false
        });
      })
      .catch(e => {
        this.setState({loading: false});
      });
  }

  handleChange(event){
    let newState = {...this.state.pagination};
    newState.searchString = event.target.value;
    this.setState({pagination: newState});
  }

  handleSubmit(event){
    event.preventDefault();
    this.searchProducts(this.state.pagination.searchString);
  }

  handleChangePage(codPage){
    let page;
    switch (codPage){
      //Button first
      case 0:
        page = 1;
        break;
      //Button before
      case 1:
        page = (this.state.pagination.currentPage > 1) ? this.state.pagination.currentPage - 1 : 1;
        break;
      //Button next
      case 2:
        page = (this.state.pagination.currentPage < this.state.pagination.totalPages) ? this.state.pagination.currentPage + 1 : this.state.pagination.totalPages;
        break;
      //Button last
      case 3:
        page = this.state.pagination.totalPages
        break;
      default:
        page = 1;
    }
    this.searchProducts(this.state.pagination.searchString, page);
  }

  componentDidMount(){
    //InitialState
    if (this.props.searchString === '' && this.props.productCards.length === 0){
      DAO.getMostPopular()
      .then(pagination => {
        //Update store
        this.props.updatePagination(pagination);
        this.setState({pagination, loading: false});
      })
      .catch(e => {
        this.setState({loading: false});
      });
    }else{
      //There was a previous search   
      this.setState({
        pagination: new MPagination(this.props.productCards, this.props.searchString, this.props.currentPage, this.props.totalPages),
        loading: false
      });
    }
  }

  render(){
    return (
      <div>
        <SearchView onChange={this.handleChange} value={this.state.pagination.searchString} onSubmit={this.handleSubmit} />
        <ProductList {...this.state.pagination} paginationButtons={this.handleChangePage} loading={this.state.loading} 
        emptyState={(this.props.searchString === '' && this.props.productCards.length === 0) ? this.searchProducts : ''}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productCards: state.PaginationReducer.productCards,
  searchString: state.PaginationReducer.searchString,
  currentPage: state.PaginationReducer.currentPage,
  totalPages: state.PaginationReducer.totalPages
});

const mapActionToProps = dispatch => bindActionCreators({updatePagination}, dispatch);

export default connect(mapStateToProps, mapActionToProps)(Search);