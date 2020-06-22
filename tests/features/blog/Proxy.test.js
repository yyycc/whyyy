import React from 'react';
import { shallow } from 'enzyme';
import { Proxy } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Proxy/>);
  expect(renderedComponent.find('.blog-proxy').length).toBe(1);
});
