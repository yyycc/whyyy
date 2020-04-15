import React from 'react';
import { shallow } from 'enzyme';
import { CssA } from '../../../src/features/css';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<CssA/>);
  expect(renderedComponent.find('.css-css-a').length).toBe(1);
});
