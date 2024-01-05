import { createAsyncThunk } from "@reduxjs/toolkit";
import instance, { setAuthJWTHeader, clearAuthJWTHeader } from "../instance.js";

const register = createAsyncThunk(
  "user/register",
  async (creds, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("users/register", creds);
      setAuthJWTHeader(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

const login = createAsyncThunk(
  "user/login",
  async (creds, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("users/login", creds);
      setAuthJWTHeader(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const logout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("users/logout");
      clearAuthJWTHeader();
      return data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

const refresh = createAsyncThunk(
  "user/refresh",
  async (token, { rejectWithValue }) => {
    try {
      setAuthJWTHeader(token);
      const { data } = await instance.get("users/current");
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.accessToken) {
        return false;
      }
    },
  }
);

const subscribe = createAsyncThunk(
  "user/subscribe",
  async (creds, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch("users/subscribe", creds, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const becomeTeacher = createAsyncThunk(
  "user/becomeTeacher",
  async (creds, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch("users/becomeTeacher", creds, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export { register, login, logout, refresh, subscribe, becomeTeacher };
