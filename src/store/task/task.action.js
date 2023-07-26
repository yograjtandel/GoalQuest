import action from '@/src/utility/action';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const CreateTask = createAsyncThunk(
  'global/CreateTask',
  async (data) => {
    const res = await action({
      method: 'post',
      url: '/v1/task',
      data,
    });
    return res.data;
  }
);

export const UpdateTask = createAsyncThunk(
  'global/UpdateTask',
  async (data, { getState }) => {
    const state = getState();
    const res = await action({
      method: 'patch',
      url: `/v1/task/${state.task.task._id}`,
      data: state.task.task,
    });
    return res.data;
  }
);

export const UpdateTaskStage = createAsyncThunk(
  'global/UpdateTaskStage',
  async ({ stage_id, id }) => {
    const res = await action({
      method: 'patch',
      url: `/v1/task/${id}`,
      data: { stage: stage_id },
    });
    return res.data;
  }
);

export const GetTasks = createAsyncThunk('global/GetTasks', async (data) => {
  const res = await action({
    method: 'get',
    url: '/v1/task?group=stage',
  });
  return res.data;
});

export const CreateLogtime = createAsyncThunk(
  'global/CreateLogtime',
  async (data) => {
    const res = await action({
      method: 'post',
      url: '/v1/timelog',
      data,
    });
    return res.data;
  }
);

export const UpdateTimeLog = createAsyncThunk(
  'global/UpdateTimeLog',
  async (data, { getState }) => {
    const state = getState();
    const res = await action({
      method: 'patch',
      url: `/v1/timelog/${state.task.time_log._id}`,
      data: state.task.time_log,
    });
    return res.data;
  }
);
