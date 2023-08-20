const { createSlice } = require('@reduxjs/toolkit');
const { fetchUsers, changeUser, fetchAllUsers } = require('./usersOperations');

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    allItems: [],
    isLoading: false,
    error: null,
    currPage: 1,
    perPage: 10,
    searchByName: '',
  },
  reducers: {
    changeUsersCurrPage(state, action) {
      state.currPage = action.payload;
    },
    changeUsersSearchQuery(state, action) {
      state.searchByName = action.payload;
    },
  },
  extraReducers: {
    [fetchUsers.pending]: handlePending,
    [fetchUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchUsers.rejected]: handleRejected,
    [fetchAllUsers.pending]: handlePending,
    [fetchAllUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.allItems = action.payload;
    },
    [fetchAllUsers.rejected]: handleRejected,
    [changeUser.pending]: handlePending,
    [changeUser.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        user => user.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [changeUser.rejected]: handleRejected,
  },
});

export const { changeUsersCurrPage, changeUsersSearchQuery } =
  usersSlice.actions;
export const usersReducer = usersSlice.reducer;
