import React from 'react';
import { shallow } from 'enzyme';
import { DockerA } from '../../../src/features/blog/Body/docker/DockerA';

describe('blog/DockerA', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DockerA {...props} />
    );

    expect(
      renderedComponent.find('.blog-docker-a').length
    ).toBe(1);
  });
});
