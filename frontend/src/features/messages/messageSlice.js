import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import messageService from './messageService';

const initialState = {
  messages: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// get messages
export const getMessages = createAsyncThunk('messages/get', async (conversationId, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await messageService.getMessages(conversationId, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// post messages
export const postMessage = createAsyncThunk('messages/post', async (msgData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await messageService.postMessage(msgData, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.messages = action.payload;
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(postMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.messages.push(action.payload);
      })
      .addCase(postMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = messageSlice.actions;
export default messageSlice.reducer;
