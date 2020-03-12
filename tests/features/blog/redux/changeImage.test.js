import {
  BLOG_CHANGE_IMAGE,
} from '../../../../src/features/blog/redux/constants';

import {
  changeImage,
  reducer,
} from '../../../../src/features/blog/redux/changeImage';

describe('blog/redux/changeImage', () => {
  it('returns correct action by changeImage', () => {
    expect(changeImage()).toHaveProperty('type', BLOG_CHANGE_IMAGE);
  });

  it('handles action type BLOG_CHANGE_IMAGE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_CHANGE_IMAGE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
