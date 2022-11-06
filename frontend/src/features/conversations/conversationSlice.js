import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import conversationService from './conversationService'

const initialState = {
  conversations: [],
  teams: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// get conversations
export const getDMs = createAsyncThunk(
  'conversations/getDMs',
  async (userId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await conversationService.getDMs(userId, token)
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

// get conversations
export const getTeams = createAsyncThunk(
  'conversations/getTeams',
  async (userId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await conversationService.getTeams(userId, token)
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


// create conversations
export const createConversation = createAsyncThunk(
  'conversations/createConversation',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await conversationService.createConversation(data, token)
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

// create teams
export const createTeam = createAsyncThunk(
  'conversations/createTeam',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await conversationService.createTeam(data, token)
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
      .addCase(getDMs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getDMs.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.conversations = action.payload
      })
      .addCase(getDMs.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getTeams.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTeams.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.teams = action.payload
      })
      .addCase(getTeams.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createConversation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createConversation.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.conversations.push(action.payload)
      })
      .addCase(createConversation.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createTeam.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createTeam.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.teams.push(action.payload)
      })
      .addCase(createTeam.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = conversationSlice.actions
export default conversationSlice.reducer
