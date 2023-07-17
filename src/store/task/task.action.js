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
