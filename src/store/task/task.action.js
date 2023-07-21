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

export const GetTasks = createAsyncThunk('global/GetTasks', async (data) => {
  const res = await action({
    method: 'get',
    url: '/v1/task?group=stage',
  });
  return res.data;
});
