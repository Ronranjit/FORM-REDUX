import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const register = createAsyncThunk("auth/register", async (user) => {
  console.log(user);
});
export const login = createAsyncThunk("auth/login", async (user) => {
  console.log(user);
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (Builder) => {},
});

export default authSlice.reducer;
