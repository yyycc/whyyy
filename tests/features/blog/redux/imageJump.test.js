import {
  BLOG_IMAGE_JUMP,
} from '../../../../src/features/blog/redux/constants';

import {
  imageJump,
  reducer,
} from '../../../../src/features/blog/redux/imageJump';

describe('blog/redux/imageJump', () => {
  it('returns correct action by imageJump', () => {
    expect(imageJump()).toHaveProperty('type', BLOG_IMAGE_JUMP);
  });

  it('handles action type BLOG_IMAGE_JUMP correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_IMAGE_JUMP }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
