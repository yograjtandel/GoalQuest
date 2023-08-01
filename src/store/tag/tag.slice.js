import { createSlice } from '@reduxjs/toolkit';
import { updateTagForm, setFormMode } from './tag.reducers';
import { CreateTag, GetTages } from './tag.action';

const initialState = {
  tags: [],
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
    builder.addCase(GetTages.fulfilled, (state, action) => {
      state.tags = [...action.payload];
    });
  },
});

export const TagFormData = (state) => state.tag.form;
export const TagOtherData = (state) => state.tag.other;
export const Tags = (state) => state.tag.tags;

export const { updateTagForm: UpdateTagForm, setFormMode: SetFormMode } =
  tagSlice.actions;

export default tagSlice.reducer;
