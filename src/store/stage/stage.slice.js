import { createSlice } from '@reduxjs/toolkit';
import { updateStageForm } from './stage.reducers';
import { CreateStage } from './stage.action';

const initialState = {
  form: {
    title: '',
  },
};
const stageSlice = createSlice({
  name: 'stage',
  initialState,
  reducers: {
    updateStageForm,
  },
  extraReducers: (builder) => {
    builder.addCase(CreateStage.fulfilled, (state, action) => {
      //   state.managers = [...action.payload];
    });
  },
});

export const StageFormData = (state) => state.stage.form;

export const { updateStageForm: UpdateStageForm } = stageSlice.actions;

export default stageSlice.reducer;
