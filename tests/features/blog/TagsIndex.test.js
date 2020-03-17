import React from 'react';
import { shallow } from 'enzyme';
import { TagsIndex } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<TagsIndex />);
  expect(renderedComponent.find('.blog-tags-index').length).toBe(1);
});
