import {
  BLOG_CHANGE_PROGRESS,
} from '../../../../src/features/blog/redux/constants';

import {
  changeProgress,
  reducer,
} from '../../../../src/features/blog/redux/changeProgress';

describe('blog/redux/changeProgress', () => {
  it('returns correct action by changeProgress', () => {
    expect(changeProgress()).toHaveProperty('type', BLOG_CHANGE_PROGRESS);
  });

  it('handles action type BLOG_CHANGE_PROGRESS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_CHANGE_PROGRESS },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
