import React from 'react';
import { shallow } from 'enzyme';
import { FLinks } from '../../../src/features/blog/FLinks';

describe('blog/FLinks', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <FLinks {...props} />,
    );

    expect(
      renderedComponent.find('.blog-f-links').length,
    ).toBe(1);
  });
});
