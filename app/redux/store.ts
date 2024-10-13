import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appSlice from './app/appSlice';
import editorSlice from './editor/editorSlice';
import minesweeperSlice from './minesweeper/minesweeperSlice';
import contextSlice from './contextMenu/contextSlice';
import sessionStorage from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  app: appSlice,
  editor: editorSlice,
  minesweeper: minesweeperSlice,
  context: contextSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
