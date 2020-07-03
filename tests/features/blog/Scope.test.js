import React from 'react';
import { shallow } from 'enzyme';
import { Scope } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Scope/>);
  expect(renderedComponent.find('.blog-scope').length).toBe(1);
});
