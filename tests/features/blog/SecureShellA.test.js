import React from 'react';
import { shallow } from 'enzyme';
import { SecureShellA } from '../../../src/features/blog/SecureShellA';

describe('blog/SecureShellA', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SecureShellA {...props} />,
    );

    expect(
      renderedComponent.find('.blog-secure-shell-a').length,
    ).toBe(1);
  });
});
