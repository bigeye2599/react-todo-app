import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommonState {
  user: { username: string } | null;
}

const commonSlice = createSlice({
  name: "common",
  initialState: {
    user: null,
  } as CommonState,
  reducers: {
    login(_, __: PayloadAction<{ username: string; password: string }>) {
      // saga will handle the login logic
    },
    setUser(state, action: PayloadAction<{ username: string }>) {
      state.user = action.payload;
    },
  },
});

export const { login, setUser } = commonSlice.actions;
const commonReducer = commonSlice.reducer;
export default commonReducer;
