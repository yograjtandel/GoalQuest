import action from '@/src/utility/action';
import { fetchTaskInitialData } from '@/src/utility/helper';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getInitialData = createAsyncThunk(
  'global/getInitialData',
  async (session, { getState }) => {
    const state = getState();
    if (!state.global.initialDataFetched) {
      const res = await fetchTaskInitialData(session);
      return res;
    }
    return state;
  }
);
