import React from 'react';
import { shallow } from 'enzyme';
import { InterviewSix } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<InterviewSix/>);
  expect(renderedComponent.find('.blog-interview-six').length).toBe(1);
});
