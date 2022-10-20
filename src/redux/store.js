import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer} from './contactsSlice';
import { filterSlice } from './filterSlice';
import {
persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filter: filterSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: 
        {ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]},}),
})
export const persistor = persistStore(store)