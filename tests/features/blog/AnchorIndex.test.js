import React from 'react';
import { shallow } from 'enzyme';
import { AnchorIndex } from '../../../src/features/blog/AnchorIndex';

describe('blog/AnchorIndex', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <AnchorIndex {...props} />,
    );

    expect(
      renderedComponent.find('.blog-anchor-index').length,
    ).toBe(1);
  });
});
