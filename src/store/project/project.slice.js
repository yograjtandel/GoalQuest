import { createSlice } from '@reduxjs/toolkit';
import { updateProjectForm } from './project.reducers';
import { CreateProject } from './project.action';

const initialState = {
  form: {
    name: '',
    description: '',
    manager: '',
    stage: '',
    deadline: '',
  },
};
const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    updateProjectForm,
  },
  extraReducers: (builder) => {
    builder.addCase(CreateProject.fulfilled, (state, action) => {
      //   state.managers = [...action.payload];
    });
  },
});

export const formData = (state) => state.project.form;

export const { updateProjectForm: UpdateProjectForm } = projectSlice.actions;

export default projectSlice.reducer;
