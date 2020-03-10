import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Footer />);
  expect(renderedComponent.find('.blog-footer').length).toBe(1);
});
