import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../../src/features/blog/Header';

describe('blog/Header', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Header {...props} />
    );

    expect(
      renderedComponent.find('.blog-header').length
    ).toBe(1);
  });
});
