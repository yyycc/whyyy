import React from 'react';
import { shallow } from 'enzyme';
import { WebServiceA } from '../../../src/features/blog/WebServiceA';

describe('blog/WebServiceA', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <WebServiceA {...props} />,
    );

    expect(
      renderedComponent.find('.blog-web-service-a').length,
    ).toBe(1);
  });
});
