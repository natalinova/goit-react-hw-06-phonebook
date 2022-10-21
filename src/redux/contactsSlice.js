import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

 export const contactsSlice = createSlice({
    name: "contacts",
     initialState: {
         contacts: [
         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
             { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
         ]
     },
     reducers:
     {
         addContacts(state, action) {
             state.contacts.push(action.payload)
         },
         deleteContacts(state, action) {
             const index = state.contacts.findIndex(item => item.id === action.payload)
             state.contacts.splice(index, 1)   
         },
     }
 })

 const persistConfig = {
  key: 'contacts',
  storage,
}
export const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContacts, deleteContacts } = contactsSlice.actions;