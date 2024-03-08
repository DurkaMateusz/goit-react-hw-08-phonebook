import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slices/ContactsSlice'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});