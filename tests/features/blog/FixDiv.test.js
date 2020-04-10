import React from 'react';
import { shallow } from 'enzyme';
import { FixDiv } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<FixDiv/>);
  expect(renderedComponent.find('.blog-fix-div').length).toBe(1);
});
