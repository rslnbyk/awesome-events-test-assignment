import { createSlice } from '@reduxjs/toolkit';
import {
  addGroup,
  changeGroup,
  deleteGroup,
  fetchGroups,
} from './groupsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const groupsSlice = createSlice({
  name: 'groups',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currPage: 1,
    perPage: 12,
    searchByName: '',
  },
  reducers: {
    changeGroupsCurrPage(state, action) {
      state.currPage = action.payload;
    },
    changeGroupsSearchQuery(state, action) {
      state.searchByName = action.payload;
    },
  },
  extraReducers: {
    [fetchGroups.pending]: handlePending,
    [fetchGroups.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchGroups.rejected]: handleRejected,
    [addGroup.pending]: handlePending,
    [addGroup.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addGroup.rejected]: handleRejected,
    [deleteGroup.pending]: handlePending,
    [deleteGroup.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        group => group.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteGroup.rejected]: handleRejected,
    [changeGroup.pending]: handlePending,
    [changeGroup.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        group => group.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [changeGroup.rejected]: handleRejected,
  },
});

export const { changeGroupsCurrPage, changeGroupsSearchQuery } =
  groupsSlice.actions;
export const groupsReducer = groupsSlice.reducer;
