import React from 'react';
import { shallow } from 'enzyme';
import { Array } from '../../../src/features/blog/Array';

describe('blog/Array', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Array {...props} />,
    );

    expect(
      renderedComponent.find('.blog-array').length,
    ).toBe(1);
  });
});
