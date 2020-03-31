import React from 'react';
import { shallow } from 'enzyme';
import { Collections } from '../../../src/features/blog/Body/Index/CollectionsIndex/Collections';

describe('blog/Collections', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Collections {...props} />,
    );

    expect(
      renderedComponent.find('.blog-collections').length,
    ).toBe(1);
  });
});
