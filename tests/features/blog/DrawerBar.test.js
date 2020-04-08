import React from 'react';
import { shallow } from 'enzyme';
import { DrawerBar } from '../../../src/features/blog/Components/Drawer/DrawerBar';

describe('blog/DrawerBar', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DrawerBar {...props} />,
    );

    expect(
      renderedComponent.find('.blog-drawer-bar').length,
    ).toBe(1);
  });
});
