import React from 'react';
import { shallow } from 'enzyme';
import { Color } from '../../../src/features/css';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Color/>);
  expect(renderedComponent.find('.css-color').length).toBe(1);
});
