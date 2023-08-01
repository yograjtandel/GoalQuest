import { createSlice } from '@reduxjs/toolkit';
import { updateStageForm, setFormMode } from './stage.reducers';
import { CreateStage, GetStages } from './stage.action';

const initialState = {
  stages: [],
  form: {
    title: '',
    display_sequence: false,
  },
  other: {
    form_mode: {},
  },
};
const stageSlice = createSlice({
  name: 'stage',
  initialState,
  reducers: {
    updateStageForm,
    setFormMode,
  },
  extraReducers: (builder) => {
    builder.addCase(CreateStage.fulfilled, (state, action) => {
      //   state.managers = [...action.payload];
    });

    builder.addCase(GetStages.fulfilled, (state, action) => {
      state.stages = [...action.payload];
    });
  },
});

export const StageFormData = (state) => state.stage.form;
export const StageOtherData = (state) => state.stage.other;
export const Stages = (state) => state.stage.stages;

export const { updateStageForm: UpdateStageForm, setFormMode: SetFormMode } =
  stageSlice.actions;

export default stageSlice.reducer;
