import React from 'react';
import { shallow } from 'enzyme';
import { CssB } from '../../../src/features/blog/CssB';

describe('blog/CssB', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <CssB {...props} />,
    );

    expect(
      renderedComponent.find('.blog-css-b').length,
    ).toBe(1);
  });
});
