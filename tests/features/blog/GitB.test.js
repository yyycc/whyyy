import React from 'react';
import { shallow } from 'enzyme';
import { GitB } from '../../../src/features/blog/Articles/Git/GitB';

describe('blog/GitB', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <GitB {...props} />,
    );

    expect(
      renderedComponent.find('.blog-git-b').length,
    ).toBe(1);
  });
});
