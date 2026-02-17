import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

export const admin_login = createAsyncThunk(
  'auth/admin_login', // First argument: The action type string
  async info => {
    console.log(info);

    try {
      const { data } = await api.post('/admin-login', info, {
        withCredentials: true
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    successMessaage: '',
    errorMessage: '',
    loading: false,
    userInfo: ''
  },

  reducers: {}
  // extraReducers: builder => {}
});

export default authSlice.reducer;
