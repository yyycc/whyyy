import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/css/DefaultPage';

describe('css/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      css: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />,
    );

    expect(
      renderedComponent.find('.css-default-page').length,
    ).toBe(1);
  });
});
