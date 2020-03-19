import React from 'react';
import { shallow } from 'enzyme';
import { PostFooter } from '../../../src/features/blog/PostFooter';

describe('blog/PostFooter', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <PostFooter {...props} />,
    );

    expect(
      renderedComponent.find('.blog-post-footer').length,
    ).toBe(1);
  });
});
