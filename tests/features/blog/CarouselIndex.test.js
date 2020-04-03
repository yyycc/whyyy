import React from 'react';
import { shallow } from 'enzyme';
import { CarouselIndex } from '../../../src/features/blog/Components/CarouselIndex/CarouselIndex';

describe('blog/CarouselIndex', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <CarouselIndex {...props} />
    );

    expect(
      renderedComponent.find('.blog-carousel-index').length
    ).toBe(1);
  });
});
