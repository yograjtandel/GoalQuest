import action from '@/src/utility/action';
import { createAsyncThunk } from '@reduxjs/toolkit';

const findGroupIndex = (projects, id) =>
  projects.findIndex((project) => id === project._id);

const setGroupProjects = (projects, group_index, data) => {
  projects[group_index] = {
    ...projects[group_index],
    projects: [...data],
  };
  return projects;
};

export const CreateProject = createAsyncThunk(
  'global/CreateProject',
  async (data, { getState }) => {
    const state = getState();
    const res = await action({
      method: 'post',
      url: '/v1/project',
      data,
    });
    const group_index = findGroupIndex(
      state.project.projects,
      res.data.stage.id
    );
    const projects = [...state.project.projects];

    return setGroupProjects(projects, group_index, [
      ...projects[group_index].projects,
      res.data,
    ]);
  }
);

export const UpdateProject = createAsyncThunk(
  'global/UpdateProject',
  async (data, { getState }) => {
    const state = getState();
    const res = await action({
      method: 'patch',
      url: `/v1/project/${state.project.form._id}`,
      data: state.project.form,
    });

    const groupIndex = findGroupIndex(
      state.project.projects,
      res.data.stage.id
    );
    const group_projects = [...state.project.projects[groupIndex].projects];
    const projectIndex = group_projects.findIndex(
      (project) => res.data.id === project._id
    );

    group_projects[projectIndex] = {
      ...group_projects[projectIndex],
      ...res.data,
    };

    const projects = [...state.project.projects];

    return setGroupProjects(projects, groupIndex, [...group_projects]);
  }
);

export const UpdateProjectStage = createAsyncThunk(
  'global/UpdateProjectStage',
  async ({ stage_id, id }) => {
    const res = await action({
      method: 'patch',
      url: `/v1/project/${id}`,
      data: { stage: stage_id },
    });
    return res.data;
  }
);

export const GetProjects = createAsyncThunk(
  'global/GetProjects',
  async (session) => {
    const res = await action({
      method: 'get',
      url: `/v1/project?group=stage?company=${session.data.company}`,
    });
    return res.data;
  }
);
