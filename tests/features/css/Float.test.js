import React from 'react';
import { shallow } from 'enzyme';
import { Float } from '../../../src/features/css';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Float/>);
  expect(renderedComponent.find('.css-float').length).toBe(1);
});
