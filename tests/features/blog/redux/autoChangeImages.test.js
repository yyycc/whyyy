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

  it('handles action type BLOG_AUTO_CHANGE_IMAGES correctly', (max) => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_AUTO_CHANGE_IMAGES, max: max - 1 },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = { imageIndex: state.imageIndex === max ? 0 : ++state.imageIndex };
    expect(state).toEqual(expectedState);
  });
});
