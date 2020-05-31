import React from 'react';
import { shallow } from 'enzyme';
import { MyTable } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<MyTable/>);
  expect(renderedComponent.find('.common-my-table').length).toBe(1);
});
