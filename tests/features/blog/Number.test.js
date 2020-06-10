import React from 'react';
import { shallow } from 'enzyme';
import { Number } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Number/>);
  expect(renderedComponent.find('.blog-number').length).toBe(1);
});
