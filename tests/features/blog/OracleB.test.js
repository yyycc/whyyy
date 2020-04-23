import React from 'react';
import { shallow } from 'enzyme';
import { OracleB } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<OracleB/>);
  expect(renderedComponent.find('.blog-oracle-b').length).toBe(1);
});
