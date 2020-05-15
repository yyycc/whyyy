import React from 'react';
import { shallow } from 'enzyme';
import { Focus } from '../../../src/features/css';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Focus/>);
  expect(renderedComponent.find('.css-focus').length).toBe(1);
});
