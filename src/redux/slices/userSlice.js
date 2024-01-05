import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  register,
  logout,
  refresh,
  subscribe,
  becomeTeacher,
} from "../operations/userOperations";
import { handlePending, handleRejected, handleFullfilled } from "../utils";

const initialState = {
  user: {
    name: null,
    email: null,
    id: null,
    avatarURL: null,
    subscribe: false,
  },
  accessToken: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const handleRegister = (state, { payload }) => {
  state.user = { ...state.user, ...payload };
  state.accessToken = payload.token;
  handleFullfilled(state);
};

const handleLogin = (state, { payload: { token, user } }) => {
  state.accessToken = token;
  state.user = { ...state.user, ...user };
  state.isLoggedIn = true;

  handleFullfilled(state);
};

const handleLogout = (state) => {
  state.isLoggedIn = false;
  state.accessToken = null;
  state.user = { name: null, email: null, id: null, avatarURL: null };

  handleFullfilled(state);
};

const handleRefresh = (state, { payload }) => {
  state.user = { ...state.user, ...payload };
  state.isLoggedIn = true;

  handleFullfilled(state);
};

const handleSubcribe = (state, { payload }) => {
  state.user.subscribe = payload;

  handleFullfilled(state);
};

const handleBecomeTeacher = (state, { payload }) => {
  //   state.user.avatarURL = payload.avatarURL || null;
  //   state.user.name = payload.name || null;

  handleFullfilled(state);
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, handleRegister)
      .addCase(login.fulfilled, handleLogin)
      .addCase(logout.fulfilled, handleLogout)
      .addCase(refresh.fulfilled, handleRefresh)
      .addCase(subscribe.fulfilled, handleSubcribe)
      .addCase(becomeTeacher.fulfilled, handleBecomeTeacher)

      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)

      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});

export default userSlice.reducer;
