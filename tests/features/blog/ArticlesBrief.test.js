import React from 'react';
import { shallow } from 'enzyme';
import { ArticlesBrief } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ArticlesBrief/>);
  expect(renderedComponent.find('.blog-articles-brief').length).toBe(1);
});
