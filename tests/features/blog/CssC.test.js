import React from 'react';
import { shallow } from 'enzyme';
import { CssC } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<CssC/>);
  expect(renderedComponent.find('.blog-css-c').length).toBe(1);
});
