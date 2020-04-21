import React from 'react';
import { shallow } from 'enzyme';
import { ViewOne } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ViewOne/>);
  expect(renderedComponent.find('.blog-view-one').length).toBe(1);
});
