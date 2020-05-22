import React from 'react';
import { shallow } from 'enzyme';
import { Chart } from '../../../src/features/visualized/Chart';

describe('visualized/Chart', () => {
  it('renders node with correct class name', () => {
    const props = {
      visualized: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Chart {...props} />,
    );

    expect(
      renderedComponent.find('.visualized-chart').length,
    ).toBe(1);
  });
});
