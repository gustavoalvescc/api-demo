import React from 'react';
import CartButton from '../cart-button/CartButton';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
      <header className="tg-header">
        <div className="tg-header-content">
        <img alt="Logo" />
        <Link className="tg-home" to="/">Home</Link>
        <CartButton />
        </div>
      </header>
  );
}

export default Header;