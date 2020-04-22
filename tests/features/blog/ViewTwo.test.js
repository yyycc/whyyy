import React from 'react';
import { shallow } from 'enzyme';
import { ViewTwo } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ViewTwo/>);
  expect(renderedComponent.find('.blog-view-two').length).toBe(1);
});
