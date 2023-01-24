import { createSlice } from "@reduxjs/toolkit";
import { getSearchUser } from "./github.thunk";
import { IAuth } from "./github.type";

const initialState: IAuth = {
  isLoadingSearchUser: false,
  searchUser: null,
  errorSearchUser: null,
  selectedUser: null,
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    resetSearchUser: (state) => {
      state.searchUser = null;
      state.errorSearchUser = null;
      state.isLoadingSearchUser = false;
    },
    setSelectedUser: (state, { payload }) => {
      state.selectedUser = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchUser.pending, (state) => {
      state.isLoadingSearchUser = true;
    });
    builder.addCase(getSearchUser.fulfilled, (state, { payload }) => {
      state.isLoadingSearchUser = false;
      state.searchUser = payload.data;
    });
    builder.addCase(getSearchUser.rejected, (state, { payload }) => {
      state.isLoadingSearchUser = false;
      state.errorSearchUser = payload;
    });
  },
});

export const { resetSearchUser, setSelectedUser } = githubSlice.actions;

export default githubSlice.reducer;
