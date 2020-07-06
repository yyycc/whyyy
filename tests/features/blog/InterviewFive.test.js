import React from 'react';
import { shallow } from 'enzyme';
import { InterviewFive } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<InterviewFive/>);
  expect(renderedComponent.find('.blog-interview-five').length).toBe(1);
});
