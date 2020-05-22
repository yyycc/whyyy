import {
  BLOG_INIT_POST,
} from '../../../../src/features/blog/redux/constants';

import {
  initPost,
  reducer,
} from '../../../../src/features/blog/redux/initPost';

describe('blog/redux/initPost', () => {
  it('returns correct action by initPost', () => {
    expect(initPost()).toHaveProperty('type', BLOG_INIT_POST);
  });

  it('handles action type BLOG_INIT_POST correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_INIT_POST },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
