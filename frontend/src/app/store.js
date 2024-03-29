import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import userReducer from '../features/users/userSlice';
import conversationReducer from '../features/conversations/conversationSlice';
import messageReducer from '../features/messages/messageSlice';
import postReducer from '../features/posts/postSlice';
import projectReducer from '../features/projects/projectSlice';
import issueReducer from '../features/issues/issueSlice';
import commentReducer from '../features/comments/commentSlice';
import surveyReducer from '../features/surveys/surveySlice';
import attachmentReducer from '../features/attachments/attachmentSlice';
import notificationReducer from '../features/notifications/notificationSlice';
import announcementReducer from '../features/announcements/announcementSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    conversations: conversationReducer,
    messages: messageReducer,
    posts: postReducer,
    projects: projectReducer,
    issues: issueReducer,
    comments: commentReducer,
    attachments: attachmentReducer,
    notifications: notificationReducer,
    announcements: announcementReducer,
    surveys: surveyReducer,
  },
});
