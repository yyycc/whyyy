import React from 'react';
import { shallow } from 'enzyme';
import { Async } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Async/>);
  expect(renderedComponent.find('.blog-async').length).toBe(1);
});
