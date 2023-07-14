import action from '@/src/utility/action';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getStagesData = createAsyncThunk(
  'global/setInitialData',
  async () => {
    const res = await action({
      method: 'get',
      url: '/v1/stage?limit=0',
    });
    return res.data.results;
  }
);

export const getManagerData = createAsyncThunk(
    'global/getManagerData',
    async () => {
      const res = await action({
        method: 'get',
        url: '/v1/users?limit=0',
      });
      return res.data.results;
    }
  );