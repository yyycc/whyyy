import React from 'react';
import { shallow } from 'enzyme';
import { JavaScript } from '../../../src/features/blog/JavaScript';

describe('blog/JavaScript', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <JavaScript {...props} />
    );

    expect(
      renderedComponent.find('.blog-java-script').length
    ).toBe(1);
  });
});
