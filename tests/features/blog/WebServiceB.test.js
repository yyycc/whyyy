import React from 'react';
import { shallow } from 'enzyme';
import { WebServiceB } from '../../../src/features/blog/WebServiceB';

describe('blog/WebServiceB', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <WebServiceB {...props} />,
    );

    expect(
      renderedComponent.find('.blog-web-service-b').length,
    ).toBe(1);
  });
});
