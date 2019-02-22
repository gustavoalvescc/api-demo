import React, { Component } from 'react';
import Header from '../header/Header';
import Content from '../content/Content';

class App extends Component {
  render() {
    return (
      <div className="tg-app">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
