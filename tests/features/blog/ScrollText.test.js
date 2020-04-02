import React from 'react';
import { shallow } from 'enzyme';
import { ScrollText } from '../../../src/features/blog/Components/ScrollText/ScrollText';

describe('blog/ScrollText', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ScrollText {...props} />,
    );

    expect(
      renderedComponent.find('.blog-scroll-text').length,
    ).toBe(1);
  });
});
