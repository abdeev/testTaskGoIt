import { createSlice } from "@reduxjs/toolkit";

const usersInitialState = [
  {
    createdAt: "2021-05-18T07:47:57.301Z",
    user: "Some Person",
    tweets: 123,
    followers: 100500,
    avatar: "../../public/defaultAvatar.png",
    id: 12952383392086006000,
    isFollowing: false,
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: usersInitialState,
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  usersSlice.actions;
export const usersReducer = usersSlice.reducer;
