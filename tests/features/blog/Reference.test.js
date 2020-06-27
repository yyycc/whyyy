import React from 'react';
import { shallow } from 'enzyme';
import { Reference } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Reference/>);
  expect(renderedComponent.find('.blog-reference').length).toBe(1);
});
