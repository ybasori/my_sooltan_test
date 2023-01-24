import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const getSearchUser = createAsyncThunk(
  "github/getSearchUser",
  async (body: { searchUser: string }, { rejectWithValue }) => {
    try {
      const result = await axios.get(
        `https://api.github.com/search/users?q=${body.searchUser}`
      );
      return result;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response);
      }
      return rejectWithValue(err);
    }
  }
);
