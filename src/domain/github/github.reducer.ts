import { createSlice } from "@reduxjs/toolkit";
import { getRepoByUsername, getSearchUser } from "./github.thunk";
import { IAuth } from "./github.type";

const initialState: IAuth = {
  isLoadingSearchUser: false,
  searchUser: null,
  errorSearchUser: null,
  selectedUser: null,
  isLoadingRepoUser: false,
  repoUser: null,
  errorRepoUser: null,
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
    resetRepoUser: (state) => {
      state.repoUser = null;
      state.errorRepoUser = null;
      state.isLoadingRepoUser = false;
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
    builder.addCase(getRepoByUsername.pending, (state) => {
      state.isLoadingRepoUser = true;
    });
    builder.addCase(getRepoByUsername.fulfilled, (state, { payload }) => {
      state.isLoadingRepoUser = false;
      state.repoUser = payload.data;
    });
    builder.addCase(getRepoByUsername.rejected, (state, { payload }) => {
      state.isLoadingRepoUser = false;
      state.errorRepoUser = payload;
    });
  },
});

export const { resetSearchUser, setSelectedUser } = githubSlice.actions;

export default githubSlice.reducer;
