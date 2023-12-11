import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "./slices/imagesSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
