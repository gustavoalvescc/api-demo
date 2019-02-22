import React from "react";
import EmptyState from './EmptyState';

describe('Empty State ', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<EmptyState />));
  it('should have a <div> with class tg-empty-state', () => {
    expect(wrapper.find('div').hasClass('tg-empty-state')).toEqual(true);
  });
  it('should have a <h1> with class tg-empty-state-text', () => {
    expect(wrapper.find('h1.tg-empty-state-text').exists()).toEqual(true);
  });
  it('should have a <h1> with class tg-empty-state-text and text Nothing to present', () => {
    expect(wrapper.find('h1.tg-empty-state-text').text()).toEqual("Nothing to present");
  });
  it('should not have a reload button', () => {
    let wrapperNew = shallow(<EmptyState reload={false}/>);
    expect(wrapperNew.find('button').exists()).toEqual(false);
  });
  it('should have a reload button', () => {
    let wrapperNew = shallow(<EmptyState reload={true}/>);
    expect(wrapperNew.find('button').exists()).toEqual(true);
  });
  it('test click butotn have a reload button', () => {
    let mockFunction = jest.fn()
    let wrapperNew = shallow(<EmptyState reload={mockFunction}/>);
    wrapperNew.find('button').simulate('click');
    expect(mockFunction.mock.calls.length).toEqual(1);
  });
});