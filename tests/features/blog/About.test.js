import React from 'react';
import { shallow } from 'enzyme';
import { About } from '../../../src/features/blog/About';

describe('blog/About', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <About {...props} />,
    );

    expect(
      renderedComponent.find('.blog-about').length,
    ).toBe(1);
  });
});
