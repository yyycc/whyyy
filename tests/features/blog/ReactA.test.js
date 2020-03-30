import React from 'react';
import { shallow } from 'enzyme';
import { ReactA } from '../../../src/features/blog/ReactA';

describe('blog/ReactA', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ReactA {...props} />,
    );

    expect(
      renderedComponent.find('.blog-react-a').length,
    ).toBe(1);
  });
});
