import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import notificationService from "./notificationService";

const initialState = {
  notifications: [],
  createdNotifications: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// get notifications
export const getNotifications = createAsyncThunk(
  "notifications/getAll",
  async (toUserId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await notificationService.getNotifications(toUserId, token);
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

// create notification
export const createNotification = createAsyncThunk(
  "notifications/create",
  async (notificationData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await notificationService.createNotification(notificationData, token);
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

// update notification
export const viewedNotification = createAsyncThunk(
    "notifications/update",
    async (notificationId, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await notificationService.viewedNotification(notificationId, token);
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

  // delete notification
export const deleteNotification = createAsyncThunk(
    "notifications/delete",
    async (notificationId, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await notificationService.deleteNotification(notificationId, token);
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

    // delete notification
export const deleteNotifications = createAsyncThunk(
  "notifications/deleteAll",
  async (toUserId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await notificationService.deleteNotifications(toUserId, token);
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

export const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
  },
    resetNotifications: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotifications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNotifications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.notifications = action.payload;
      })
      .addCase(getNotifications.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createNotification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNotification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.createdNotifications.push(action.payload);
      })
      .addCase(createNotification.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(viewedNotification.pending, (state) => {
        state.isLoading = true
      })
      .addCase(viewedNotification.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.notifications.forEach(notification => {
          if(notification._id === action.payload.id){
            notification.viewed = true
          }
        })
      })
      .addCase(viewedNotification.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteNotification.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteNotification.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.notifications = state.notifications.filter(
          (notification) => notification._id !== action.payload.id
        )
      })
      .addCase(deleteNotification.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteNotifications.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteNotifications.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.notifications = []
      })
      .addCase(deleteNotifications.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
});

export const { resetNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
