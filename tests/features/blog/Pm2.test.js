import React from 'react';
import { shallow } from 'enzyme';
import { Pm2 } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Pm2/>);
  expect(renderedComponent.find('.blog-pm-2').length).toBe(1);
});
