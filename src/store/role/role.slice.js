import { createSlice } from '@reduxjs/toolkit';
import { updateRoleForm, setFormMode } from './role.reducers';
import { CreateRole, GetRoles } from './role.action';

const initialState = {
  roles: [],
  form: {
    name: '',
    rights: [],
  },
  other: {
    form_mode: {},
  },
};
const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    updateRoleForm,
    setFormMode,
  },
  extraReducers: (builder) => {
    builder.addCase(CreateRole.fulfilled, (state, action) => {
      //   state.managers = [...action.payload];
    });
    builder.addCase(GetRoles.fulfilled, (state, action) => {
      state.roles = [...action.payload];
    });
  },
});

export const RoleFormData = (state) => state.role.form;
export const RoleOtherData = (state) => state.role.other;
export const Roles = (state) => state.role.roles;

export const { updateRoleForm: UpdateRoleForm, setFormMode: SetFormMode } =
  roleSlice.actions;

export default roleSlice.reducer;
