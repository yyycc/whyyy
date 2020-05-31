import {
  COMMON_QUERY_USERS,
} from '../../../../src/features/common/redux/constants';

import {
  setUsers,
  reducer,
} from '../../../../src/features/common/redux/setUsers';

describe('common/redux/setUsers', () => {
  it('returns correct action by setUsers', () => {
    expect(setUsers()).toHaveProperty('type', COMMON_QUERY_USERS);
  });

  it('handles action type COMMON_QUERY_USERS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: COMMON_QUERY_USERS },
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
