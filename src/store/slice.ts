import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface loginState {
  otpvalue: boolean
  loggedvalue: boolean
}

const initialState: loginState = {
  otpvalue: false,
  loggedvalue: false
}

export const loginSlice = createSlice({
  name: 'loginOTP',
  initialState,
  reducers: {
    sendOTP: (state) => {
      state.otpvalue = true
    },
    loggedIn: (state) => {
      {
        state.loggedvalue = true
      }
    }
  },
  
})

// Action creators are generated for each case reducer function
export const { sendOTP,loggedIn
    //  decrement,
    //   incrementByAmount
    } = loginSlice.actions

export default loginSlice.reducer