import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

export const store = configureStore(
  {
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  },

  window.__REDUX_DEVTOOLs_EXTENSION_COMPOSE__ &&
    window.REDUX_DEVTOOLs_EXTENSION_COMPOSE__()
);
