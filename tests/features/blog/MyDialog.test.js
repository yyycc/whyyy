import React from 'react';
import { shallow } from 'enzyme';
import { MyDialog } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<MyDialog/>);
  expect(renderedComponent.find('.blog-my-dialog').length).toBe(1);
});
