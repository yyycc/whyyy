import {
  COMMON_ADD_USERS,
} from '../../../../src/features/common/redux/constants';

import {
  addUsers,
  reducer,
} from '../../../../src/features/common/redux/addUsers';

describe('common/redux/addUsers', () => {
  it('returns correct action by addUsers', () => {
    expect(addUsers()).toHaveProperty('type', COMMON_ADD_USERS);
  });

  it('handles action type COMMON_ADD_USERS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: COMMON_ADD_USERS },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
