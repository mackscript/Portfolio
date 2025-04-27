import { configureStore } from '@reduxjs/toolkit';

import { loadState, saveState } from './utils/localStorage';
import themeSlice from './reducer/themeSlicer';

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
