import React from 'react';
import { shallow } from 'enzyme';
import { DockerC } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<DockerC/>);
  expect(renderedComponent.find('.blog-docker-c').length).toBe(1);
});
