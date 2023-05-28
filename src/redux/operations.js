import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./usersSlice";

axios.defaults.baseURL = "https://64654fdb228bd07b35480657.mockapi.io";

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get("/users");
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};
export const updateUser = createAsyncThunk(
  "users/update",
  async (id, dispatch) => {
    try {
      dispatch(fetchingInProgress());
      const response = await axios.put(`/users/${id}`);
      dispatch(fetchingSuccess(response.data));
    } catch (e) {
      dispatch(fetchingError(e.message));
    }
  }
);
