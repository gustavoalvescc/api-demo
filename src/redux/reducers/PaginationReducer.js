const initialState = {
  productCards: [],
  searchString: '',
  currentPage: 0,
  totalPages: 0
};

const updateState = (newState) => {
  let newArray = newState.productCards.slice(0);
  return {
    productCards: newArray,
    searchString: newState.searchString,
    currentPage: newState.currentPage,
    totalPages: newState.totalPages
  }
}

export function PaginationReducer(state = initialState, action){
  switch(action.type){
    case 'UPDATE_PAGINATION':
      return updateState(action.newState);
    default:
      return state;
  }
}