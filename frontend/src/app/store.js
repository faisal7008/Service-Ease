import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice' 
import userReducer from '../features/users/userSlice'
import conversationReducer from '../features/conversations/conversationSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    conversations: conversationReducer,
  },
});
