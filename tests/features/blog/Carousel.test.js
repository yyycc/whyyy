import React from 'react';
import { shallow } from 'enzyme';
import { Carousel } from '../../../src/features/blog/Carousel';

describe('blog/Carousel', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Carousel {...props} />
    );

    expect(
      renderedComponent.find('.blog-carousel').length
    ).toBe(1);
  });
});
