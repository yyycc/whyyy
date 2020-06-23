import React from 'react';
import { shallow } from 'enzyme';
import { ReactB } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ReactB/>);
  expect(renderedComponent.find('.blog-react-b').length).toBe(1);
});
