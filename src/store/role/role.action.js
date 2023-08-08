import action from '@/src/utility/action';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const CreateRole = createAsyncThunk(
  'global/Createrole',
  async (data) => {
    const res = await action({
      method: 'post',
      url: '/v1/role',
      data,
    });
    return res.data.results;
  }
);

export const GetRoles = createAsyncThunk('global/GetRoles', async (session) => {
  const res = await action({
    method: 'get',
    url: `/v1/role?limit=0&&company=${session.data.company}`,
  });
  return res.data.results;
});
