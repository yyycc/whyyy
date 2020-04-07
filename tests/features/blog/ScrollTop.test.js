import React from 'react';
import { shallow } from 'enzyme';
import { ScrollTop } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ScrollTop/>);
  expect(renderedComponent.find('.blog-scroll-top').length).toBe(1);
});
