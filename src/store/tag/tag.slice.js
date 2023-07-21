import { createSlice } from '@reduxjs/toolkit';
import { updateTagForm, setFormMode } from './tag.reducers';
import { CreateTag } from './tag.action';

const initialState = {
  form: {
    title: '',
  },
  other: {
    form_mode: {},
  },
};
const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    updateTagForm,
    setFormMode,
  },
  extraReducers: (builder) => {
    builder.addCase(CreateTag.fulfilled, (state, action) => {
      //   state.managers = [...action.payload];
    });
  },
});

export const TagFormData = (state) => state.tag.form;
export const TagOtherData = (state) => state.tag.other;

export const { updateTagForm: UpdateTagForm, setFormMode: SetFormMode } =
  tagSlice.actions;

export default tagSlice.reducer;
