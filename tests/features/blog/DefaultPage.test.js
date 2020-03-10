import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/blog/DefaultPage';

describe('blog/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.blog-default-page').length
    ).toBe(1);
  });
});
