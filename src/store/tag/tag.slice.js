import { createSlice } from '@reduxjs/toolkit';
import { updateTagForm } from './tag.reducers';
import { CreateTag } from './tag.action';

const initialState = {
  form: {
    title: '',
  },
};
const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    updateTagForm,
  },
  extraReducers: (builder) => {
    builder.addCase(CreateTag.fulfilled, (state, action) => {
      //   state.managers = [...action.payload];
    });
  },
});

export const TagFormData = (state) => state.tag.form;

export const { updateTagForm: UpdateTagForm } = tagSlice.actions;

export default tagSlice.reducer;
