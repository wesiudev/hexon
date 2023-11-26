
import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "./slices/imagesSlice";
import userReducer from "./slices/userSlice";
import { browseImages } from "./imagesApi";

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    user: userReducer,
    browseImages: browseImages.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(browseImages.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
