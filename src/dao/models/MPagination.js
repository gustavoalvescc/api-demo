class MPagination{
  constructor(productCards, searchString, currentPage, totalPages){
    this.productCards = productCards;
    this.currentPage = currentPage;
    this.totalPages = totalPages;
    this.searchString = searchString;
  }
}

export default MPagination;