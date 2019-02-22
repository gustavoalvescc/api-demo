import React from 'react';
import Loading from './Loading';

describe('Loading ', () => {
  it('should have a div with class tg-full-content', () => {
    let wrapper = shallow(<Loading />);
    expect(wrapper.find('div.tg-full-content').exists()).toEqual(true);
  });
  it('should have a div with class lds-ring', () => {
    let wrapper = shallow(<Loading />);
    expect(wrapper.find('div.tg-lds-ring').exists()).toEqual(true);
  });
});