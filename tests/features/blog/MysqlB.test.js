import React from 'react';
import { shallow } from 'enzyme';
import { MysqlB } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<MysqlB/>);
  expect(renderedComponent.find('.blog-mysql-b').length).toBe(1);
});
