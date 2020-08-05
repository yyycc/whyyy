import React from 'react';
import { shallow } from 'enzyme';
import { FaTitle } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<FaTitle/>);
  expect(renderedComponent.find('.blog-fa-title').length).toBe(1);
});
