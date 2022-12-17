import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import announcementService from './announcementService'

const initialState = {
  announcements: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// get all Announcements
export const getAllAnnouncements = createAsyncThunk(
  'announcements/getAll',
  async (_ ,thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await announcementService.getAllAnnouncements(token)
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

// get a Announcement
export const getAnnouncement = createAsyncThunk(
  'announcements/get',
  async (AnnouncementId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await announcementService.getAnnouncement(AnnouncementId, token)
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

// create Announcement
export const createAnnouncement = createAsyncThunk(
  'announcements/create',
  async (AnnouncementData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await announcementService.createAnnouncement(AnnouncementData, token)
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

// update Announcement
export const updateAnnouncement = createAsyncThunk(
  'announcements/update',
  async ({AnnouncementId, AnnouncementData}, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await announcementService.updateAnnouncement(AnnouncementId, AnnouncementData, token)
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

// delete Announcement
export const deleteAnnouncement = createAsyncThunk(
  'announcements/delete',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await announcementService.deleteAnnouncement(data.announcementId, data.userId, token)
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

// like/unlike Announcement
export const likeAnnouncement = createAsyncThunk(
  'announcements/like',
  async ({AnnouncementId, AnnouncementData}, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await announcementService.likeAnnouncement(AnnouncementId, AnnouncementData, token)
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



export const AnnouncementSlice = createSlice({
  name: 'Announcements',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAnnouncement.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAnnouncement.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.announcements = action.payload
      })
      .addCase(getAnnouncement.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getAllAnnouncements.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllAnnouncements.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.announcements = action.payload
      })
      .addCase(getAllAnnouncements.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createAnnouncement.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createAnnouncement.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.announcements.push(action.payload)
      })
      .addCase(createAnnouncement.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateAnnouncement.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateAnnouncement.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(updateAnnouncement.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteAnnouncement.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteAnnouncement.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.announcements = state.announcements.filter(
          (Announcement) => Announcement._id !== action.payload._id
        )
      })
      .addCase(deleteAnnouncement.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = AnnouncementSlice.actions
export default AnnouncementSlice.reducer
