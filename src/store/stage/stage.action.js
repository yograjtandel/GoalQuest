import action from '@/src/utility/action';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const CreateStage = createAsyncThunk(
  'global/Createstage',
  async (data) => {
    const res = await action({
      method: 'post',
      url: '/v1/stage',
      data,
    });
    return res.data.results;
  }
);
