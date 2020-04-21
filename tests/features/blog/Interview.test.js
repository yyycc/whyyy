import React from 'react';
import { shallow } from 'enzyme';
import { Interview } from '../../../src/features/blog/Articles/Topic/Interview';

describe('blog/Interview', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Interview {...props} />,
    );

    expect(
      renderedComponent.find('.blog-interview').length,
    ).toBe(1);
  });
});
