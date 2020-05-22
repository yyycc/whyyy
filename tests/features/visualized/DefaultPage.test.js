import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/visualized/DefaultPage';

describe('visualized/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      visualized: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />,
    );

    expect(
      renderedComponent.find('.visualized-default-page').length,
    ).toBe(1);
  });
});
