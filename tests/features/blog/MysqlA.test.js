import React from 'react';
import { shallow } from 'enzyme';
import { MysqlA } from '../../../src/features/blog/MysqlA';

describe('blog/MysqlA', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <MysqlA {...props} />,
    );

    expect(
      renderedComponent.find('.blog-mysql-a').length,
    ).toBe(1);
  });
});
