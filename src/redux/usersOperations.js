import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64db3afe593f57e435b0a995.mockapi.io/api/v1';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `/users?p=${data.currPage}&l=${data.perPage}&firstName=${data.firstName}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAllUsers = createAsyncThunk(
  'users/fetchAllUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const changeUser = createAsyncThunk(
  'users/changeUser',
  async (user, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${user.id}`, user);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
