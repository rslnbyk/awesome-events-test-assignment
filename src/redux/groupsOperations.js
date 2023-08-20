import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64db3afe593f57e435b0a995.mockapi.io/api/v1';

export const fetchGroups = createAsyncThunk(
  'users/fetchGroups',
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `/groups?p=${data.currPage}&l=${data.perPage}&name=${data.name}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addGroup = createAsyncThunk(
  'groups/addGroup',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/groups', data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteGroup = createAsyncThunk(
  'groups/deleteGroup',
  async (groupId, thunkAPI) => {
    try {
      const response = await axios.delete(`/groups/${groupId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const changeGroup = createAsyncThunk(
  'groups/changeGroup',
  async (group, thunkAPI) => {
    try {
      const response = await axios.put(`/groups/${group.id}`, group);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
