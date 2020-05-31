import React from 'react';
import { shallow } from 'enzyme';
import { Blogs } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Blogs/>);
  expect(renderedComponent.find('.common-blogs').length).toBe(1);
});
