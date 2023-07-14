import { createSlice } from '@reduxjs/toolkit';
import { updateHeading } from './global.reducers';
import { getManagerData, getStagesData } from './global.action';

const initialState = {
  heading: '',
  stages: [],
  managers: [],
};
const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    updateHeading,
  },
  extraReducers: (builder) => {
    builder.addCase(getStagesData.fulfilled, (state, action) => {
      state.stages = [...action.payload];
    });

    builder.addCase(getManagerData.fulfilled, (state, action) => {
      state.managers = [...action.payload];
    });
  },
});

export const header_heading = (state) => state.global.heading;
export const stages = (state) => state.global.stages;
export const managers = (state) => state.global.managers;
export const { updateHeading: UpdateHeading } = globalSlice.actions;

export default globalSlice.reducer;
