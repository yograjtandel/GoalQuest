import { createSlice } from '@reduxjs/toolkit';
import {
  updateProjectForm,
  setFormMode,
  setProjects,
  setIntialProjectData,
} from './project.reducers';
import { CreateProject, GetProjects } from './project.action';
import { initialState } from './project.initial.state';

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    updateProjectForm,
    setFormMode,
    setProjects,
    setIntialProjectData,
  },
  extraReducers: (builder) => {
    builder.addCase(CreateProject.fulfilled, (state, action) => {
      //   state.managers = [...action.payload];
    });
    builder.addCase(GetProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
    });
  },
});

export const ProjectFormData = (state) => state.project.form;
export const ProjectOtherData = (state) => state.project.other;
export const projects = (state) => state.project.projects;

export const {
  updateProjectForm: UpdateProjectForm,
  setFormMode: SetFormMode,
  setProjects: SetProjects,
  setIntialProjectData: SetIntialProjectData,
} = projectSlice.actions;

export default projectSlice.reducer;
