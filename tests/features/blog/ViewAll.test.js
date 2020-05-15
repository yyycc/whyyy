import React from 'react';
import { shallow } from 'enzyme';
import { ViewAll } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ViewAll/>);
  expect(renderedComponent.find('.blog-view-all').length).toBe(1);
});
