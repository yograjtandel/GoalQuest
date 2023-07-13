import { createSlice } from '@reduxjs/toolkit';
import { updateProjectForm } from './project.reducers';

const initialState = {
  form: {
    name: '',
    description: '',
    manager: '',
    stage: '',
  },
};
const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    updateProjectForm,
  },
});

export const header_heading = (state) => state.global.heading;

export const { updateProjectForm: UpdateProjectForm } = projectSlice.actions;

export default projectSlice.reducer;
