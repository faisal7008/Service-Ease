import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import issueService from "./issueService";

const initialState = {
  issues: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// get Issues
export const getIssues = createAsyncThunk(
  "issues/getAll",
  async (projectId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await issueService.getIssues(projectId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// create Issue
export const createIssue = createAsyncThunk(
  "issues/create",
  async (IssueData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await issueService.createIssue(IssueData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// update Issue
export const updateIssue = createAsyncThunk(
    "issues/update",
    async ({IssueId, IssueData}, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await issueService.updateIssue(IssueId, IssueData, token);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  // delete Issue
export const deleteIssue = createAsyncThunk(
    "issues/delete",
    async (IssueId, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await issueService.deleteIssue(IssueId, token);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

export const issueSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIssues.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIssues.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.issues = action.payload;
      })
      .addCase(getIssues.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createIssue.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createIssue.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.issues.push(action.payload);
      })
      .addCase(createIssue.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateIssue.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateIssue.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(updateIssue.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteIssue.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteIssue.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.issues = state.issues.filter(
          (Issue) => Issue._id !== action.payload.id
        )
      })
      .addCase(deleteIssue.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
});

export const { reset } = issueSlice.actions;
export default issueSlice.reducer;
