import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import conversationService from './conversationService'

const initialState = {
  conversations: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// get conversations
export const getConversations = createAsyncThunk(
  'conversations/getOne',
  async (userId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await conversationService.getConversations(userId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const conversationSlice = createSlice({
  name: 'conversations',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConversations.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getConversations.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.conversations = action.payload
      })
      .addCase(getConversations.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = conversationSlice.actions
export default conversationSlice.reducer
