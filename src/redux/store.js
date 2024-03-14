import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import contactsReducer from './contactsSlice';
import { devToolsEnhancer } from '@redux-devtools/extension';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const enhancer = devToolsEnhancer();

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore(
  {
    reducer: {
      contacts: contactsReducer,
      auth: persistReducer(authPersistConfig, authReducer),
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  },
  enhancer
);

export const persist = persistStore(store);
