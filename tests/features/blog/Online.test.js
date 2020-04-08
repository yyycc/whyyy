import React from 'react';
import { shallow } from 'enzyme';
import { Online } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Online/>);
  expect(renderedComponent.find('.blog-online').length).toBe(1);
});
