import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import surveyService from "./surveyService";

const initialState = {
  surveys: [],
  submissions: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// get Surveys
export const getSurveys = createAsyncThunk(
  "surveys/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await surveyService.getSurveys(token);
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

// get Surveys
export const getSubmissions = createAsyncThunk(
  "submissions/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await surveyService.getSubmissions(token);
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

// create Survey
export const createSurvey = createAsyncThunk(
  "surveys/create",
  async (SurveyData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await surveyService.createSurvey(SurveyData, token);
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

// create Survey
export const addSubmission = createAsyncThunk(
  "submission/create",
  async (submissionData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await surveyService.addSubmission(submissionData, token);
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

// update Survey
export const updateSurvey = createAsyncThunk(
    "surveys/update",
    async ({SurveyId, SurveyData}, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await surveyService.updateSurvey(SurveyId, SurveyData, token);
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

  // delete Survey
export const deleteSurvey = createAsyncThunk(
    "surveys/delete",
    async (SurveyId, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await surveyService.deleteSurvey(SurveyId, token);
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

export const surveySlice = createSlice({
  name: "Surveys",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSurveys.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSurveys.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.surveys = action.payload;
      })
      .addCase(getSurveys.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSubmissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSubmissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.submissions = action.payload;
      })
      .addCase(getSubmissions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createSurvey.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSurvey.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.surveys.push(action.payload);
      })
      .addCase(createSurvey.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addSubmission.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addSubmission.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.submissions.push(action.payload);
      })
      .addCase(addSubmission.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateSurvey.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateSurvey.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.surveys.forEach((issue, index) => {
          if (issue._id === action.payload._id) {
            state.surveys[index] = action.payload
          }
        });
      })
      .addCase(updateSurvey.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteSurvey.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteSurvey.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.surveys = state.surveys.filter(
          (Survey) => Survey._id !== action.payload.id
        )
      })
      .addCase(deleteSurvey.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
});

export const { reset } = surveySlice.actions;
export default surveySlice.reducer;
