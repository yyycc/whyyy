import React from 'react';
import { shallow } from 'enzyme';
import { BlogDetail } from '../../../src/features/blog/Components/Drawer/BlogDetail';

describe('blog/BlogDetail', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <BlogDetail {...props} />,
    );

    expect(
      renderedComponent.find('.blog-blog-detail').length,
    ).toBe(1);
  });
});
