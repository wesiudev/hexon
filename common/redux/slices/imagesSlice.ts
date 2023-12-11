import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  images: [],
  loadingImages: true,
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    addImagesToArray: (state, action) => {
      state.images = [...state.images, action.payload];
    },
    setImages: (state, action) => {
      state.images = action.payload;
      state.loadingImages = false;
    },
    pushToImages: (state, action) => {
      state.images.unshift(action.payload);
    },

    clearImages: (state, action) => {
      state.images = [];
    },
  },
});

export const {
  setImages,
  clearImages,
  setLimit,
  addImagesToArray,
  pushToImages,
} = imagesSlice.actions;

export default imagesSlice.reducer;
