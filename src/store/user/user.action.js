import action from '@/src/utility/action';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const CreateUser = createAsyncThunk(
  'global/CreateUser',
  async (data) => {
    const res = await action({
      method: 'post',
      url: '/v1/user',
      data,
    });
    return res.data.results;
  }
);

export const GetUsers = createAsyncThunk('global/GetUsers', async (session) => {
  const res = await action({
    method: 'get',
    url: `/v1/user/users&&company=${session.data.company}`,
  });
  return res.data;
});
