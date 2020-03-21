import React from 'react';
import { shallow } from 'enzyme';
import { PreFormat } from '../../../src/features/blog/PreFormat';

describe('blog/PreFormat', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <PreFormat {...props} />,
    );

    expect(
      renderedComponent.find('.blog-pre-format').length,
    ).toBe(1);
  });
});
