import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./slices/userSlice";
import contentReducer from "./slices/contentSlice";

const persistUserConfig = {
  key: "token",
  storage,
  whitelist: ["accessToken"],
};

const persistContentConfig = {
  key: "content",
  storage,
};

const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

const persistedContentReducer = persistReducer(
  persistContentConfig,
  contentReducer
);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    content: persistedContentReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
