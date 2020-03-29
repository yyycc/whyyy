import React from 'react';
import { shallow } from 'enzyme';
import { SpringA } from '../../../src/features/blog/SpringA';

describe('blog/SpringA', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SpringA {...props} />,
    );

    expect(
      renderedComponent.find('.blog-spring-a').length,
    ).toBe(1);
  });
});
