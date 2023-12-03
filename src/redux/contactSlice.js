import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'John Smith', number: '123-45-678' },
    { id: nanoid(), name: 'Emily Johnson', number: '987-65-432' },
  ],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(payload) {
        return {
          payload: {
            id: nanoid(),
            ...payload,
          },
        };
      },
    },
    removeContact: {
      reducer(state, action) {
        const contactIdToRemove = action.payload;
        return state.filter(item => item.id !== contactIdToRemove);
      },
    },
  },
});
export const getPhoneBookValue = state => state.phoneBook.contacts;
export const contactReducer = contactSlice.reducer;
export const { addContact, removeContact } = contactSlice.actions;
