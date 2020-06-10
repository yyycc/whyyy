import React from 'react';
import { shallow } from 'enzyme';
import { RegExp } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<RegExp/>);
  expect(renderedComponent.find('.blog-reg-exp').length).toBe(1);
});
