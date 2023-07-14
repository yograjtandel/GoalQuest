import { createSlice } from '@reduxjs/toolkit';
import { updateRoleForm } from './role.reducers';
import { CreateRole } from './role.action';

const initialState = {
  form: {
    name: "",
    rights: [],
  },
};
const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    updateRoleForm,
  },
  extraReducers: (builder) => {
    builder.addCase(CreateRole.fulfilled, (state, action) => {
      //   state.managers = [...action.payload];
    });
  },
});

export const RoleFormData = (state) => state.role.form;

export const { updateRoleForm: UpdateRoleForm } = roleSlice.actions;

export default roleSlice.reducer;
