import React from 'react';
import { shallow } from 'enzyme';
import { MyDrawer } from '../../../src/features/blog/MyDrawer';

describe('blog/MyDrawer', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <MyDrawer {...props} />,
    );

    expect(
      renderedComponent.find('.blog-my-drawer').length,
    ).toBe(1);
  });
});
