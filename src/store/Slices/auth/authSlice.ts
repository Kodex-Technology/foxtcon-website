import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import api from "@/store/apiServices/api";
import axios from "axios";
import { MESSAGES } from "@/constant/message";
import API_URLS from "@/store/apiServices/apiUrl";
import { AuthState } from "@/types/auth";

const initialState: AuthState = {
  access_token: Cookies.get("token") || null,
  loading: false,
  error: null,
  user: Cookies.get("user") ? JSON.parse(Cookies.get("user")!) : null,
};
export const login = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await api.post(API_URLS.AUTH.LOGIN, {
        email,
        password,
      });
      console.log("response", response);
      const { token, user } = response.data;
      const access_token = token.access_token;
      Cookies.set("token", access_token, { expires: 1 });
      Cookies.set("user", JSON.stringify(user), { expires: 1 });

      return { access_token, user };
    } catch (err: unknown) {
      console.log("err", err);
      if (axios.isAxiosError(err)) {
        return rejectWithValue(
          err.response?.data?.message || MESSAGES.COMMON.API_ERROR,
        );
      }
      return rejectWithValue(MESSAGES.COMMON.UNEXPECTED_ERROR);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.access_token = null;
      state.user = null;
      Cookies.remove("token");
      Cookies.remove("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.access_token = action.payload.access_token;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
