import action from '@/src/utility/action';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const CreateProject = createAsyncThunk(
  'global/CreateProject',
  async (data) => {
    const res = await action({
      method: 'post',
      url: '/v1/project',
      data,
    });
    return res.data.results;
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
    return res.data;
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
