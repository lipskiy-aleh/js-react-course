
export const geuUsersState = (state) => state.users

export const getUsersList = (state) => geuUsersState(state).list

// const getUsersList = createSelector(geuUsersState, users => users.list)