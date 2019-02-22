import React from "react";
import SearchView from './SearchView';

const mockSubmit = jest.fn();
const mockChange = jest.fn();

describe('Search View ', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<SearchView onChange={mockChange} onSubmit={mockSubmit}/>));
  it('should have a <form> with class tg-search', () => {
    expect(wrapper.find('form').hasClass('tg-search')).toEqual(true);
  });
  it('should have a <input> with class tg-search-input', () => {
    expect(wrapper.find('input').hasClass('tg-search-input')).toEqual(true);
  });
  it('should have a <button> with class tg-search-button', () => {
    expect(wrapper.find('button').hasClass('tg-search-button')).toEqual(true);
  });
  it('should submit form <form>', () => {
    wrapper.find('form').simulate('submit')
    expect(mockSubmit.mock.calls.length).toEqual(1);
  });
  it('should change input', () => {
    wrapper.find('input').simulate('change')
    expect(mockChange.mock.calls.length).toEqual(1);
  });
  it('should click button', () => {
    wrapper.find('button').simulate('click')
    expect(mockSubmit.mock.calls.length).toEqual(2);
  });
});