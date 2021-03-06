import React from 'react';
import { shallow } from 'enzyme';
import { BreadCrumb } from '../../../src/features/blog/BreadCrumb/BreadCrumb';

describe('blog/BreadCrumb', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
    };
    const renderedComponent = shallow(
      <BreadCrumb {...props} />
    );

    expect(
      renderedComponent.find('.blog-bread-crumb').length
    ).toBe(1);
  });
});
