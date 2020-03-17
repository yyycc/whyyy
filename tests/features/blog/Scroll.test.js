import React from 'react';
import { shallow } from 'enzyme';
import { Scroll } from '../../../src/features/blog/Scroll';

describe('blog/Scroll', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Scroll {...props} />
    );

    expect(
      renderedComponent.find('.blog-scroll').length
    ).toBe(1);
  });
});
