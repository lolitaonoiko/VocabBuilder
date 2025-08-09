export const selectUser = state => state.auth.user;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserId = state => state.auth.user.id;

export const selectIsAuthLoading = state => state.auth.isAuthLoading;
export const selectIsAuthError = state => state.auth.isAuthError;
export const selectIsLoggedIn = state => state.auth.isAuthLoggedIn;
