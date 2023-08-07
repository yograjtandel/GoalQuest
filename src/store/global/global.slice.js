import { createSlice } from '@reduxjs/toolkit';
import { updateHeading, updateGlobalData } from './global.reducers';
import { getInitialData } from './global.action';

const initialState = {
  heading: '',
  stages: [],
  managers: [],
  projects: [],
  tags: [],
  users: [],
  roles: [],
  //   form_state: false,
  initialDataFetched: false,
  active_drop_zone: false,
};
const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    updateHeading,
    updateGlobalData,
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialData.fulfilled, (state, action) => {
      if (!state.initialDataFetched) {
        state.projects = [...action.payload.projects];
        state.tags = [...action.payload.tags];
        state.users = [...action.payload.users];
        state.stages = [...action.payload.stags];
        state.managers = [...action.payload.managers];
        state.roles = [...action.payload.roles];
        state.initialDataFetched = true;
      }
    });
  },
});

export const header_heading = (state) => state.global.heading;
export const globalData = (state) => state.global;

export const {
  updateHeading: UpdateHeading,
  updateGlobalData: UpdateGlobalData,
} = globalSlice.actions;

export default globalSlice.reducer;
