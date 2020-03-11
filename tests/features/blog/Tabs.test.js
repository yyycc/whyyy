import React from 'react';
import { shallow } from 'enzyme';
import { Tabs } from '../../../src/features/blog/Tabs';

describe('blog/Tabs', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Tabs {...props} />
    );

    expect(
      renderedComponent.find('.blog-tabs').length
    ).toBe(1);
  });
});
