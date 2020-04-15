import React from 'react';
import { shallow } from 'enzyme';
import { Css } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Css/>);
  expect(renderedComponent.find('.blog-css').length).toBe(1);
});
