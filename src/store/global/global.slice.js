import { createSlice } from '@reduxjs/toolkit';
import { updateHeading } from './global.reducers';
const initialState = {
  heading: '',
};
const globalSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    updateHeading,
  },
});

export const header_heading = (state) => state.global.heading;
export const { updateHeading: UpdateHeading } = globalSlice.actions;

export default globalSlice.reducer;
