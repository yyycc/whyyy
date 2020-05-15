import React from 'react';
import { shallow } from 'enzyme';
import { InlineBlock } from '../../../src/features/css';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<InlineBlock/>);
  expect(renderedComponent.find('.css-inline-block').length).toBe(1);
});
