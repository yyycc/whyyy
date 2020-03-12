import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../../../src/features/blog/HomePage';

describe('blog/HomePage', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <HomePage {...props} />
    );

    expect(
      renderedComponent.find('.blog-home-page').length
    ).toBe(1);
  });
});
