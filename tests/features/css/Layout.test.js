import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/css/Layout/Layout';

describe('css/Layout', () => {
  it('renders node with correct class name', () => {
    const props = {
      css: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Layout {...props} />,
    );

    expect(
      renderedComponent.find('.css-layout').length,
    ).toBe(1);
  });
});
