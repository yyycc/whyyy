import {
  BLOG_AUTO_CHANGE_IMAGES,
} from '../../../../src/features/blog/redux/constants';

import {
  autoChangeImages,
  reducer,
} from '../../../../src/features/blog/redux/autoChangeImages';

describe('blog/redux/autoChangeImages', () => {
  it('returns correct action by autoChangeImages', () => {
    expect(autoChangeImages()).toHaveProperty('type', BLOG_AUTO_CHANGE_IMAGES);
  });

  it('handles action type BLOG_AUTO_CHANGE_IMAGES correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_AUTO_CHANGE_IMAGES },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
