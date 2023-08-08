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

export const GetStages = createAsyncThunk('global/GetStages', async (data) => {
  const res = await action({
    method: 'get',
    url: `/v1/stage?limit=0&&company=${session.data.company}`,
  });
  return res.data.results;
});
