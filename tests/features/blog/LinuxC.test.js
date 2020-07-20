import React from 'react';
import { shallow } from 'enzyme';
import { LinuxC } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<LinuxC/>);
  expect(renderedComponent.find('.blog-linux-c').length).toBe(1);
});
