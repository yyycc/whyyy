import {
  BLOG_CHANGE_SUB_ANCHOR_DISPLAY,
} from '../../../../src/features/blog/redux/constants';

import {
  changeSubAnchorDisplay,
  reducer,
} from '../../../../src/features/blog/redux/changeSubAnchorDisplay';

describe('blog/redux/changeSubAnchorDisplay', () => {
  it('returns correct action by changeSubAnchorDisplay', () => {
    expect(changeSubAnchorDisplay()).toHaveProperty('type', BLOG_CHANGE_SUB_ANCHOR_DISPLAY);
  });

  it('handles action type BLOG_CHANGE_SUB_ANCHOR_DISPLAY correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: BLOG_CHANGE_SUB_ANCHOR_DISPLAY },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
