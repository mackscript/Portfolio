import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOn: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    togglePower: (state, { payload }) => {
      state.isOn = payload;
    },
  },
});

export const { togglePower } = themeSlice.actions;
export default themeSlice.reducer;
