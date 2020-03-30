import React from 'react';
import { shallow } from 'enzyme';
import { Ntfs } from '../../../src/features/blog/Ntfs';

describe('blog/Ntfs', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Ntfs {...props} />,
    );

    expect(
      renderedComponent.find('.blog-ntfs').length,
    ).toBe(1);
  });
});
