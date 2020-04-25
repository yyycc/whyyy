import React from 'react';
import { shallow } from 'enzyme';
import { ViewThree } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ViewThree/>);
  expect(renderedComponent.find('.blog-view-three').length).toBe(1);
});
