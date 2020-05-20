import React from 'react';
import { shallow } from 'enzyme';
import { Canvas } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Canvas/>);
  expect(renderedComponent.find('.blog-canvas').length).toBe(1);
});
