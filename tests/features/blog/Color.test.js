import React from 'react';
import { shallow } from 'enzyme';
import { Color } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Color/>);
  expect(renderedComponent.find('.blog-color').length).toBe(1);
});
