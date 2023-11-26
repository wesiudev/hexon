
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { redirect } from "next/navigation";

const initialState: any = {
  userData: {},
  wasLevelUp: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action:PayloadAction<string>) => {
      state.userData = action.payload
    },
    setUserTutorial:(state, action:PayloadAction<string>) => {
      state.userData.tutorialStep = action.payload
    },
    setAccountExperience:(state,action:PayloadAction<any>) => {
      if (action.payload.pointsToAdd + action.payload.accountExperience > action.payload.pointsNeeded) {
        state.userData.accountExperience = state.userData.accountExperience+action.payload.pointsToAdd-action.payload.pointsNeeded
        state.userData.accountLevel += 1
        state.wasLevelUp = true
      }else{
        state.userData.accountExperience += action.payload.pointsToAdd
      }
    },
    setLevelAnimated:(state, action:PayloadAction<any>) => {
      state.levelAnimated = action.payload
    },
    setWasLevelUp:(state, action:PayloadAction<boolean>) => {
      state.wasLevelUp = action.payload
    },
    logout: (state) => {
      state.userData = {}
      redirect("/auth")
    },
  },
});

export const { setUser, logout, setUserTutorial, setAccountExperience, setLevelAnimated } = userSlice.actions;

export default userSlice.reducer;
