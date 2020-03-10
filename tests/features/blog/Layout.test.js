import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Layout />);
  expect(renderedComponent.find('.blog-layout').length).toBe(1);
});
