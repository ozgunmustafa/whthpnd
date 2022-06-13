import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import categorySlice from "../features/categories/categorySlice";

const store = configureStore({
  reducer: {
    categories: categorySlice,
    authentication:authSlice
  }
})

export default store