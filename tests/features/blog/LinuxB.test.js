import React from 'react';
import { shallow } from 'enzyme';
import { LinuxB } from '../../../src/features/blog/LinuxB';

describe('blog/LinuxB', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LinuxB {...props} />,
    );

    expect(
      renderedComponent.find('.blog-linux-b').length,
    ).toBe(1);
  });
});
