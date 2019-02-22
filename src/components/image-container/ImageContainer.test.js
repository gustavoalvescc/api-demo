import React from 'react';
import ImageContainer from './ImageContainer';

describe("Image container ",() => {
  it('should return a div if image is empty', () => {
    let wrapper = shallow(<ImageContainer />);
    expect(wrapper.find('div.tg-image-container').exists()).toEqual(true);
  });
  it('should have a span with text No Picture Available', () => {
    let wrapper = shallow(<ImageContainer />);
    expect(wrapper.find('span').text()).toEqual("No Picture Available");
  });
  it('should have a img ', () => {
    let wrapper = shallow(<ImageContainer src="ProductName" alt="ProductName" />);
    expect(wrapper.find('img').exists()).toEqual(true);
  });
});