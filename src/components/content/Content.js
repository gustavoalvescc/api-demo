import React from 'react';
import Search from '../search/Search';
import Product from '../product/Product';
import Cart from '../cart/Cart';
import { Switch, Route } from 'react-router-dom';
const Content = () => {
  return (
      <main className="tg-content">
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/product/:productId" component={Product} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </main>
  );
}

export default Content;