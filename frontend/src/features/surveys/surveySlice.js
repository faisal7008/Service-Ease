import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import surveyService from './surveyService'

const initialState = {
  surveys: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new Assignment
export const addsurvey = createAsyncThunk(
  'surveys/add',
  async (surveyData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await surveyService.addAssignment(surveyData, token)
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

// Get all students
export const getSurveys = createAsyncThunk(
  'surveys/getSurveys',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await surveyService.getSurveys(token)
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

// Delete Assignment
// export const deleteAssignment = createAsyncThunk(
//   'assignments/delete',
//   async (id, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await assignmentService.deleteAssignment(id, token)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

export const surveySlice = createSlice({
  name: 'surveys',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addSurvey.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addSurvey.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.surveys.push(action.payload)
      })
      .addCase(addSurvey.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getSurveys.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSurveys.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.surveys = action.payload
      })
      .addCase(getSurveys.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
    //   .addCase(deletesurvey.pending, (state) => {
    //     state.isLoading = true
    //   })
    //   .addCase(deletesurvey.fulfilled, (state, action) => {
    //     state.isLoading = false
    //     state.isSuccess = true
    //     state.surveys = state.surveys.filter(
    //       (survey) => survey._id !== action.payload.id
    //     )
    //   })
    //   .addCase(deletesurvey.rejected, (state, action) => {
    //     state.isLoading = false
    //     state.isError = true
    //     state.message = action.payload
    //   })
  },
})

export const { reset } = surveySlice.actions
export default surveySlice.reducer