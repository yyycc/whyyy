import React from 'react';
import { shallow } from 'enzyme';
import { CssA } from '../../../src/features/blog/Body/css/CssA';

describe('blog/CssA', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <CssA {...props} />,
    );

    expect(
      renderedComponent.find('.blog-css-a').length,
    ).toBe(1);
  });
});
