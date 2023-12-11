import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { redirect } from "next/navigation";

const initialState: any = {
  userData: {},
  wasLevelUp: false,
  loading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    },
    setUserTutorial: (state, action) => {
      state.userData.tutorialStep = action.payload;
    },
    setAccountExperience: (state, action) => {
      if (
        action.payload.pointsToAdd + action.payload.accountExperience >
        action.payload.pointsNeeded
      ) {
        state.userData.accountExperience =
          state.userData.accountExperience +
          action.payload.pointsToAdd -
          action.payload.pointsNeeded;
        state.userData.accountLevel += 1;
        state.wasLevelUp = true;
      } else {
        state.userData.accountExperience += action.payload.pointsToAdd;
      }
    },
    setLevelAnimated: (state, action: PayloadAction<any>) => {
      state.levelAnimated = action.payload;
    },
    setWasLevelUp: (state, action: PayloadAction<boolean>) => {
      state.wasLevelUp = action.payload;
    },
    logout: (state) => {
      state.userData = {};
      redirect("/auth");
    },
  },
});

export const {
  setUser,
  logout,
  setUserTutorial,
  setAccountExperience,
  setLevelAnimated,
} = userSlice.actions;

export default userSlice.reducer;
