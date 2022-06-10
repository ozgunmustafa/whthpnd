import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    create: (state, action) => {
      const newCategory = {}
      state.push(newCategory)
    }
  }
})

export default categorySlice.reducer
export const { create } = categorySlice.actions
