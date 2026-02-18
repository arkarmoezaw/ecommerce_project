import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

export const admin_login = createAsyncThunk(
  'auth/admin_login', // First argument: The action type string
  async (info, { rejectWithValue, fulfillWithValue }) => {
    console.log(info);

    try {
      const { data } = await api.post('/admin-login', info, {
        withCredentials: true
      });
      localStorage.setItem('accessToken', data?.token);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    successMessaage: '',
    errorMessage: '',
    loader: false,
    userInfo: ''
  },

  reducers: {
    messageClear: state => {
      state.errorMessage = '';
      state.successMessaage = '';
    }
  },
  extraReducers: builder => {
    builder.addCase(admin_login.pending, state => {
      state.loader = true;
    });
    builder.addCase(admin_login.fulfilled, (state, { payload }) => {
      state.loader = false;
      state.successMessaage = payload?.message || 'Login successful';
      state.userInfo = payload?.userInfo || null;
    });
    builder.addCase(admin_login.rejected, (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload?.error || 'Login failed. Please try again.';
    });
  }
});

export default authSlice.reducer;

export const { messageClear } = authSlice.actions;
