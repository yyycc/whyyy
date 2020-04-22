import React from 'react';
import { shallow } from 'enzyme';
import { Triangle } from '../../../src/features/css';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Triangle/>);
  expect(renderedComponent.find('.css-triangle').length).toBe(1);
});
