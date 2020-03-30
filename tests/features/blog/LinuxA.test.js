import React from 'react';
import { shallow } from 'enzyme';
import { LinuxA } from '../../../src/features/blog/LinuxA';

describe('blog/LinuxA', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LinuxA {...props} />,
    );

    expect(
      renderedComponent.find('.blog-linux-a').length,
    ).toBe(1);
  });
});
