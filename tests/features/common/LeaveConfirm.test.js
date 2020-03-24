import React from 'react';
import { shallow } from 'enzyme';
import { LeaveConfirm } from '../../../src/features/common/LeaveConfirm';

describe('common/LeaveConfirm', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LeaveConfirm {...props} />,
    );

    expect(
      renderedComponent.find('.common-leave-confirm').length,
    ).toBe(1);
  });
});
