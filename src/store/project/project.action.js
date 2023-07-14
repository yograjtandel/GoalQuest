import action from '@/src/utility/action';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const CreateProject = createAsyncThunk(
  'global/CreateProject',
  async (data) => {
    debugger;
    const res = await action({
      method: 'post',
      url: '/v1/project',
      data,
    });
    return res.data.results;
  }
);
