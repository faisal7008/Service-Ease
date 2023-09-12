import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import attachmentService from './attachmentService';

const initialState = {
  attachments: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// get attachments
export const getAttachments = createAsyncThunk('attachments/getAll', async (issueId, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await attachmentService.getAttachments(issueId, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// create attachment
export const addAttachment = createAsyncThunk(
  'attachments/add',
  async (attachmentData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await attachmentService.addAttachment(attachmentData, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

// delete attachment
export const deleteAttachment = createAsyncThunk(
  'attachments/delete',
  async (attachmentId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await attachmentService.deleteAttachment(attachmentId, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const attachmentSlice = createSlice({
  name: 'attachments',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAttachments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAttachments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.attachments = action.payload;
      })
      .addCase(getAttachments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addAttachment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAttachment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.attachments.push(action.payload);
      })
      .addCase(addAttachment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteAttachment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAttachment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.attachments = state.attachments.filter(
          (attachment) => attachment._id !== action.payload.id,
        );
      })
      .addCase(deleteAttachment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = attachmentSlice.actions;
export default attachmentSlice.reducer;
