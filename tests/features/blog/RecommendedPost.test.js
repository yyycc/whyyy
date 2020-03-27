import React from 'react';
import { shallow } from 'enzyme';
import { RecommendedPost } from '../../../src/features/blog/RecommendedPost';

describe('blog/RecommendedPost', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <RecommendedPost {...props} />,
    );

    expect(
      renderedComponent.find('.blog-recommended-post').length,
    ).toBe(1);
  });
});
