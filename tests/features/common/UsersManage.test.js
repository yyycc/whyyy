import React from 'react';
import { shallow } from 'enzyme';
import { UsersManage } from '../../../src/features/common/Users/UsersManage';

describe('common/UsersManage', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <UsersManage {...props} />,
    );

    expect(
      renderedComponent.find('.common-users-manage').length,
    ).toBe(1);
  });
});
