import React from 'react';
import { shallow } from 'enzyme';
import { Sentences } from '../../../src/features/blog/Notice/Sentences/Sentences';

describe('blog/Sentences', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Sentences {...props} />,
    );

    expect(
      renderedComponent.find('.blog-sentences').length,
    ).toBe(1);
  });
});
