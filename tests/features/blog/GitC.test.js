import React from 'react';
import { shallow } from 'enzyme';
import { GitC } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<GitC/>);
  expect(renderedComponent.find('.blog-git-c').length).toBe(1);
});
