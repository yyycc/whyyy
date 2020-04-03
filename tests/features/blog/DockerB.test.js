import React from 'react';
import { shallow } from 'enzyme';
import { DockerB } from '../../../src/features/blog/Articles/Docker/DockerB';

describe('blog/DockerB', () => {
  it('renders node with correct class name', () => {
    const props = {
      blog: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DockerB {...props} />
    );

    expect(
      renderedComponent.find('.blog-docker-b').length
    ).toBe(1);
  });
});
