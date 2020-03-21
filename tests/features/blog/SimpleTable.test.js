import React from 'react';
import { shallow } from 'enzyme';
import { SimpleTable } from '../../../src/features/blog/SimpleTable';

describe('blog/SimpleTable', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SimpleTable {...props} />,
    );

    expect(
      renderedComponent.find('.blog-simple-table').length,
    ).toBe(1);
  });
});
