import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import issueService from './issueService';

const initialState = {
  issue: [],
  issues: [],
  manager_issues: [],
  employee_issues: [],
  isError: false,
  isSuccess: false,
  isUpdated: false,
  isLoading: false,
  message: '',
};

// get Issue
export const getIssue = createAsyncThunk('issues/getOne', async (issueId, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await issueService.getIssue(issueId, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// get Issues
export const getIssues = createAsyncThunk('issues/getAll', async (projectId, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    // console.log(token)
    return await issueService.getIssues(projectId, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// get Issues
export const getAllIssues = createAsyncThunk('issues/get', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    // console.log(token)
    return await issueService.getAllIssues(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// create Issue
export const createIssue = createAsyncThunk('issues/create', async (IssueData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await issueService.createIssue(IssueData, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// update Issue
export const updateIssue = createAsyncThunk(
  'issues/update',
  async ({ IssueId, IssueData }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await issueService.updateIssue(IssueId, IssueData, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

// update Issue
export const updateIssueAttachments = createAsyncThunk(
  'issues/updateAttachments',
  async ({ IssueId, IssueData }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await issueService.updateIssueAttachments(IssueId, IssueData, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

// delete Issue
export const deleteIssue = createAsyncThunk('issues/delete', async (IssueId, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await issueService.deleteIssue(IssueId, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const issueSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIssue.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIssue.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.issue = action.payload;
      })
      .addCase(getIssue.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
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

      .addCase(getAllIssues.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllIssues.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.issues = action.payload;
      })
      .addCase(getAllIssues.rejected, (state, action) => {
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
        state.isLoading = true;
      })
      .addCase(updateIssue.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.isUpdated = true;
        state.issues.forEach((issue, index) => {
          // console.log(index)
          // console.log(action.payload)
          if (issue._id === action.payload._id) {
            state.issues[index] = action.payload;
          }
        });
      })
      .addCase(updateIssue.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateIssueAttachments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateIssueAttachments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.issues.forEach((issue, index) => {
          // console.log(index)
          // console.log(action.payload)
          if (issue._id === action.payload._id) {
            state.issues[index] = action.payload;
          }
        });
      })
      .addCase(updateIssueAttachments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteIssue.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteIssue.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.issues = state.issues.filter((Issue) => Issue._id !== action.payload.id);
      })
      .addCase(deleteIssue.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = issueSlice.actions;
export default issueSlice.reducer;
