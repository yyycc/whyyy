import React from 'react';
import { shallow } from 'enzyme';
import { ScrollBanner } from '../../../src/features/blog/ScrollBanner';

describe('blog/ScrollBanner', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ScrollBanner {...props} />,
    );

    expect(
      renderedComponent.find('.blog-scroll-banner').length,
    ).toBe(1);
  });
});
