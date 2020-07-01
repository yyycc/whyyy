import React from 'react';
import { shallow } from 'enzyme';
import { File } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<File/>);
  expect(renderedComponent.find('.blog-file').length).toBe(1);
});
