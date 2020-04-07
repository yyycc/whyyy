import React from 'react';
import { shallow } from 'enzyme';
import { ScrollBottom } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ScrollBottom/>);
  expect(renderedComponent.find('.blog-scroll-bottom').length).toBe(1);
});
