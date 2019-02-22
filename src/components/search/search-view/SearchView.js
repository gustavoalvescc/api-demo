import React from 'react';

const SearchView = (props) => {
  return (
    <form onSubmit={(event) => props.onSubmit(event)} className="tg-search">
      <label className="hidden" htmlFor="inputSearch">Search for products</label>
      <input id="inputSearch" type="text" onChange={(event) => props.onChange(event)} className="tg-search-input" value={props.value} />
      <button type="submit" onClick={(event) => props.onSubmit(event)} className="tg-search-button"> Search
        <i className="fas fa-search"></i>  
      </button>
      {props.children}
    </form>
  );
}

export default SearchView;