import React from 'react';
import { shallow } from 'enzyme';
import { ArticlesList } from '../../../src/features/blog/Articles/ArticlesList';

describe('blog/ArticlesList', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ArticlesList {...props} />,
    );

    expect(
      renderedComponent.find('.blog-articles-list').length,
    ).toBe(1);
  });
});
