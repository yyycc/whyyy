import React from 'react';
import { shallow } from 'enzyme';
import { FileManage } from '../../../src/features/blog';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<FileManage/>);
  expect(renderedComponent.find('.blog-file-manage').length).toBe(1);
});
