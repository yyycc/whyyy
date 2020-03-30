import React from 'react';
import { shallow } from 'enzyme';
import { GitA } from '../../../src/features/blog/GitA';

describe('blog/GitA', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <GitA {...props} />,
    );

    expect(
      renderedComponent.find('.blog-git-a').length,
    ).toBe(1);
  });
});
