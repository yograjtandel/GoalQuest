import action from '@/src/utility/action';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const CreateTag = createAsyncThunk(
  'global/Createtag',
  async (data) => {
    const res = await action({
      method: 'post',
      url: '/v1/tag',
      data,
    });
    return res.data.results;
  }
);

export const GetTages = createAsyncThunk('global/GetTages', async (data) => {
    const res = await action({
      method: 'get',
      url: '/v1/tag?limit=0',
    });
    return res.data.results;
  });