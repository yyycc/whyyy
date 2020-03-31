import React from 'react';
import { shallow } from 'enzyme';
import { ChangeFont } from '../../../src/features/blog/Body/Index/ChangeFont';

describe('blog/ChangeFont', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ChangeFont {...props} />,
    );

    expect(
      renderedComponent.find('.blog-change-font').length,
    ).toBe(1);
  });
});
