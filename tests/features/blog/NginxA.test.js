import React from 'react';
import { shallow } from 'enzyme';
import { NginxA } from '../../../src/features/blog/NginxA';

describe('blog/NginxA', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <NginxA {...props} />,
    );

    expect(
      renderedComponent.find('.blog-nginx-a').length,
    ).toBe(1);
  });
});
