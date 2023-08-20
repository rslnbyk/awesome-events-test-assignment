import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './usersSlice';
import { groupsReducer } from './groupsSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    groups: groupsReducer,
  },
});
