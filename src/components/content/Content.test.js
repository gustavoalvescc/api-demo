import React from "react";
import Content from './Content';

describe('Content ', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Content />));
  it('should have a <main> with class tg-content', () => {
    expect(wrapper.find('main').hasClass('tg-content')).toEqual(true);
  });
});