import { createSlice } from '@reduxjs/toolkit';
import { logout } from './auth/operations';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: [],
  filter: '',
  items: [],
  loading: false,
  error: null,
};

const handlePending = state => {
  state.loading = true;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
        state.loading = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logout.fulfilled, (state) => {
        // Here you should also reset your contact and filter state if needed
        state.contacts = [];
        state.filter = '';
        state.items = [];
        state.loading = false;
        state.error = null;
      });
  },
});
export const { setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
