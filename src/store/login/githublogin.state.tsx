import { createSlice } from "@reduxjs/toolkit";
import { getCode } from "./githubLogin.logic";


export interface AuthState {
    token: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }

const initialState: AuthState = {
    token: null,
    status: 'idle',
    error: null,
  }

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      logout: (state) => {
        state.token = null;
        localStorage.removeItem('Authorization');
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getCode.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getCode.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.token = action.payload.token;
          localStorage.setItem('Authorization', `Bearer ${action.payload.token}`);
        })
        .addCase(getCode.rejected, (state, action) => {
          state.status = 'failed';
          state.error = 'An unknown error occurred';
        });
    },
  });
  
  export const { logout } = authSlice.actions;
  
  export default authSlice.reducer;