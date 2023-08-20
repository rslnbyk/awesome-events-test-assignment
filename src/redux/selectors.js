export const selectUsers = state => state.users.items;

export const selectAllUsers = state => state.users.allItems;

export const selectUsersIsLoading = state => state.users.isLoading;

export const selectUsersPerPage = state => state.users.perPage;

export const selectUsersCurrPage = state => state.users.currPage;

export const selectUsersSearchQuery = state => state.users.searchByName;

export const selectGroups = state => state.groups.items;

export const selectGroupsIsLoading = state => state.groups.isLoading;

export const selectGroupsPerPage = state => state.groups.perPage;

export const selectGroupsCurrPage = state => state.groups.currPage;

export const selectGroupsSearchQuery = state => state.groups.searchByName;
