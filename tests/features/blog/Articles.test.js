import React from 'react';
import { shallow } from 'enzyme';
import { Articles } from '../../../src/features/blog/Articles/Articles';

describe('blog/Articles', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Articles {...props} />,
    );

    expect(
      renderedComponent.find('.blog-articles').length,
    ).toBe(1);
  });
});
