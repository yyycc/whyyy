import {
  BLOG_CHANGE_MODE,
} from '../../../../src/features/blog/redux/constants';

import {
  changeMode,
  reducer,
} from '../../../../src/features/blog/redux/changeMode';

describe('blog/redux/changeMode', () => {
  it('returns correct action by changeMode', () => {
    expect(changeMode()).toHaveProperty('type', BLOG_CHANGE_MODE);
  });

  it('handles action type BLOG_CHANGE_MODE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_CHANGE_MODE },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
