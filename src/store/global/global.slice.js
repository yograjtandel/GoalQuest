import { createSlice } from '@reduxjs/toolkit';
import { updateHeading } from './global.reducers';
import { getInitialData } from './global.action';

const initialState = {
  heading: '',
  stages: [],
  managers: [],
  projects: [],
  tags: [],
  users: [],
  //   form_state: false,
  active_record: false,
  initialDataFetched: false,
  form_mode: {},
};
const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    updateHeading,
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialData.fulfilled, (state, action) => {
      if (!state.initialDataFetched) {
        state.projects = [...action.payload.projects];
        state.tags = [...action.payload.tags];
        state.users = [...action.payload.users];
        state.stages = [...action.payload.stags];
        state.managers = [...action.payload.managers];
        state.initialDataFetched = true;
      }
    });
  },
});

export const header_heading = (state) => state.global.heading;
// export const stages = (state) => state.global.stages;
// export const managers = (state) => state.global.managers;
export const globalData = (state) => state.global;

export const { updateHeading: UpdateHeading } = globalSlice.actions;

export default globalSlice.reducer;
