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
