import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./loginSlice"

export const store = configureStore({
  reducer: {
    otp: loginReducer
  },
})

export type RootState = ReturnType<typeof store.getState>