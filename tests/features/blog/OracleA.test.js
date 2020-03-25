import React from 'react';
import { shallow } from 'enzyme';
import { OracleA } from '../../../src/features/blog/OracleA';

describe('blog/OracleA', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <OracleA {...props} />,
    );

    expect(
      renderedComponent.find('.blog-oracle-a').length,
    ).toBe(1);
  });
});
