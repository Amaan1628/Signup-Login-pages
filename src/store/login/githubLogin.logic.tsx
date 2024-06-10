import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCode = createAsyncThunk(
  'auth/getCode',
  async (search, { rejectWithValue }) => {
    try {
      const res = await axios.get(`http://localhost:5000/auth/callback?code=${search}`);
      return res.data;
    }catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
