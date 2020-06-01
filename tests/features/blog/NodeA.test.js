import React from 'react';
import { shallow } from 'enzyme';
import { NodeA } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<NodeA/>);
  expect(renderedComponent.find('.blog-node-a').length).toBe(1);
});
