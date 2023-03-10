import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    // here we will be adding micro reducers such as adduser, deleteuser
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      return state.filter((_, id) => id !== action.payload);
    },
    delteAllUsers(state, action) {
      return (state = []);
      // OR return [];
    },
  },
  extraReducers(builder) {
    builder.addCase(clearAllUsers, () => {
      return [];
    });
  },
});

export default userSlice.reducer;
export const { addUser, removeUser, delteAllUsers } = userSlice.actions;
