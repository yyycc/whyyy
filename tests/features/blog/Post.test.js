import React from 'react';
import { shallow } from 'enzyme';
import { Post } from '../../../src/features/blog/Post';

describe('blog/Post', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Post {...props} />
    );

    expect(
      renderedComponent.find('.blog-post').length
    ).toBe(1);
  });
});
