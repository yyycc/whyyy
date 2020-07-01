import React from 'react';
import { shallow } from 'enzyme';
import { CollectionsDetail } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<CollectionsDetail/>);
  expect(renderedComponent.find('.blog-collections-detail').length).toBe(1);
});
