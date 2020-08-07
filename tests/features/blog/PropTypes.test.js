import React from 'react';
import { shallow } from 'enzyme';
import { PropTypes } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<PropTypes/>);
  expect(renderedComponent.find('.blog-prop-types').length).toBe(1);
});
