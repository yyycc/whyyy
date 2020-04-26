import React from 'react';
import { shallow } from 'enzyme';
import { ViewFour } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ViewFour/>);
  expect(renderedComponent.find('.blog-view-four').length).toBe(1);
});
