import React from 'react';
import { shallow } from 'enzyme';
import { SearchIndex } from '../../../src/features/blog/SearchIndex';

describe('blog/SearchIndex', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SearchIndex {...props} />,
    );

    expect(
      renderedComponent.find('.blog-search-index').length,
    ).toBe(1);
  });
});
