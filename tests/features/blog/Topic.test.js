import React from 'react';
import { shallow } from 'enzyme';
import { Topic } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Topic/>);
  expect(renderedComponent.find('.blog-topic').length).toBe(1);
});
