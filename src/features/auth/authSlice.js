import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import UserService from '../../services/UserService'

const initialState = {
  data: null,
  loading: false,
  error: ''
}

export const registerUser = createAsyncThunk(
  'registerUser',
  async ({ name, email, password }) => {
    const res = await UserService.registerUser({ name, email, password })
    return res.data
  }
)
const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true
        state.error = ''
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        alert('xxxx')
        state.loading = false
        state.data = action.payload
        state.error = ''
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = 'An error occurred while registering'
      })
  }
})

export default authSlice.reducer
