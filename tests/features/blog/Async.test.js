import React from 'react';
import { shallow } from 'enzyme';
import { AsyncSugar } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<AsyncSugar/>);
  expect(renderedComponent.find('.blog-async').length).toBe(1);
});
