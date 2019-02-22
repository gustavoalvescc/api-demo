import React from 'react';
import App from './App';
import Header from '../header/Header';
import Content from '../content/Content';

 describe('App', () => {
   let wrapper;
   beforeEach(() => wrapper = shallow(<App />));
  it('should render the main <div>', () => {
    expect(wrapper.find('div').hasClass('tg-app')).toBe(true);
  });
  it('should have a Header component', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toBe(true);
  });
  it('should have a Header component', () => {
    expect(wrapper.containsMatchingElement(<Content />)).toBe(true);
  });
 });