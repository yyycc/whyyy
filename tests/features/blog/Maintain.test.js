import React from 'react';
import { shallow } from 'enzyme';
import { Maintain } from '../../../src/features/blog/Notice/Maintain/Maintain';

describe('blog/Maintain', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Maintain {...props} />,
    );

    expect(
      renderedComponent.find('.blog-maintain').length,
    ).toBe(1);
  });
});
